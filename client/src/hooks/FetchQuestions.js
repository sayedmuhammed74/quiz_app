// import { questions, answers } from '../database/data';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Action from '../redux/question_reducer';
import { getServerData } from '../helper/helper';
import { url } from '../url';

// fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: {},
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    // async function fetch backend data
    (async () => {
      try {
        const {
          data: { questions, answers },
        } = await getServerData(`${url}/api/questions`);
        console.log({ questions, answers });
        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: { questions, answers } }));

          // dispatch an action
          dispatch(Action.startExamAction({ questions, answers }));
        } else {
          throw new Error('No Question Available');
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

// Move Action Fispatch function
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); // increase trace by 1
  } catch (error) {
    console.log(error);
  }
};

export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction()); // decrease trace by 1
  } catch (error) {
    console.log(error);
  }
};
