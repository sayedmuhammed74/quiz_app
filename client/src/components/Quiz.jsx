import { useDispatch, useSelector } from 'react-redux';
import Questions from './Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestions';
import { pushAnswer } from '../hooks/setResult';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  attemptsNumber,
  earnPointsNumber,
  flagResult,
  postServerData,
} from '../helper/helper';

export default function Quiz() {
  const [checked, setChecked] = useState(undefined);
  const { trace, queue, answers } = useSelector((state) => state.questions);
  const { result, userId } = useSelector((state) => state.result);
  const dispatch = useDispatch();

  const totalPoints = queue.length * 10;
  const attempts = attemptsNumber([...result, checked]);
  const earnedPoints = earnPointsNumber([...result, checked], answers, 10);
  const flag = flagResult(totalPoints, earnedPoints);

  const onFinish = async () => {
    await postServerData('http://localhost:8080/api/results', {
      username: userId,
      result: [...result, checked],
      attempts,
      points: earnedPoints,
      achieved: flag,
    });
  };

  // Prev button event handler
  const onPrev = () => {
    // update the trace value by -1 using MovePrevAction
    dispatch(MovePrevQuestion());
    setChecked(undefined);
  };

  // Next button event handler
  const onNext = async () => {
    // update the trace value by one using MoveNextAction
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      // insert a new result in the array
      if (result.length <= trace) {
        dispatch(pushAnswer(checked));
      }
    }

    if (trace === 4) {
      onFinish();
    }
    // reset the checked value to undefined
    setChecked(undefined);
  };

  const onCheck = (check) => {
    setChecked(check);
  };

  // finish exam after the last question
  if (result.length && result.length === queue.length) {
    return <Navigate to="/result" replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Auiz Application</h1>

      {/* Display questions */}

      <Questions onCheck={onCheck} />
      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={onNext}>
          {result.length === queue.length - 1 && trace === queue.length - 1
            ? 'Fnish'
            : 'Next'}
        </button>
        {/* {result.length < queue.length - 1 && (
          <button className="btn next" onClick={onNext}>
            Next
          </button>
        )} */}
      </div>
    </div>
  );
}
