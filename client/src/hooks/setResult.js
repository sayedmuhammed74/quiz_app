import { postServerData } from '../helper/helper';
import { url } from '../url';
import * as Acton from './../redux/result_reducer';

export const pushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Acton.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateAnswer = (checked, trace) => async (dispatch) => {
  try {
    await dispatch(Acton.updateResultAction({ checked, trace }));
  } catch (error) {
    console.log(error);
  }
};

export const submitResult = async (result) => {
  try {
    const res = await postServerData(`${url}/api/results`, result);
    return res;
  } catch (error) {
    console.log(error);
  }
};
