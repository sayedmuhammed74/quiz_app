import { useRef } from 'react';
import { Link } from 'react-router-dom';

// styles
import './../styles/Main.css';
import { useDispatch } from 'react-redux';
import { setUserId } from './../redux/result_reducer';

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const startQuiz = () => {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  };

  return (
    <div className="container">
      <h1 className="title text-light">Auiz Application</h1>
      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one options.
        </li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id="form">
        <input
          type="text"
          className="userId"
          placeholder="Username*"
          ref={inputRef}
        />
      </form>

      <div className="start">
        <Link className="btn" to="/quiz" onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
