import { Link } from 'react-router-dom';
import './../styles/Result.css';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { attemptsNumber, earnPointsNumber, flagResult } from '../helper/helper';
export default function Result() {
  const dispatch = useDispatch();
  const { queue, answers } = useSelector((state) => state.questions);
  const { result, userId } = useSelector((state) => state.result);

  const totalPoints = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earnedPoints = earnPointsNumber(result, answers, 10);
  const flag = flagResult(totalPoints, earnedPoints);
  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };

  return (
    <div className="container">
      <h1 className="title text-light">Result</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userId}</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points</span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questons : </span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">{earnedPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <div
            style={{ color: `${flag ? '#2aff95' : '#ff2a66'}` }}
            className={`bold`}
          >
            {flag ? 'Passed' : 'Failed'}
          </div>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to="/" onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="conatiner">
        {/* Result Table */}
        <ResultTable />
      </div>
    </div>
  );
}
