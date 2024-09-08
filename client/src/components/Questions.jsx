import { useEffect, useState } from 'react';

// Custom Hook
import { useFetchQuestion } from '../hooks/FetchQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { updateResultAction } from '../redux/result_reducer';
// import { updateAnswer } from '../hooks/setResult';

export default function Questions({ onCheck }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(undefined);
  const trace = useSelector((state) => state.questions.trace);
  const result = useSelector((state) => state.result.result);
  const question = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const [{ isLoading, serverError }] = useFetchQuestion();

  // UseEffects
  useEffect(() => {
    dispatch(updateResultAction({ trace, checked }));
  }, [checked]);

  // on Select Answer Function
  const onSelect = (i) => {
    onCheck(i);
    setChecked(i);
    dispatch(updateResultAction({ checked, trace }));
  };

  // Loading Component
  if (isLoading) return <h3 className="text-light">Loading</h3>;

  // Error Component
  if (serverError)
    return <h3 className="text-light">{serverError || 'Unknown Error'}</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">
        {trace} - {question?.question}
      </h2>

      <ul key={question?._id}>
        {question?.options.map((option, i) => (
          <li key={i}>
            <input
              type="radio"
              value={checked}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {option}
            </label>
            <div
              className={`check ${result[trace] === i ? 'checked' : ''}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
