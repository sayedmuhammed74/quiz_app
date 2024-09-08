import axios from 'axios';

export const attemptsNumber = (result) => {
  return result.filter((r) => r != undefined).length;
};

export const earnPointsNumber = (result, answers, point) => {
  return (
    result.map((el, i) => answers[i] === el).filter((i) => i).length * point
  );
};

export const flagResult = (totalPoints, earnedPoints) => {
  return (totalPoints * 50) / 100 < earnedPoints; // earn 50% marks
};

export const getServerData = async (url) => {
  const res = await axios.get(url);
  return res?.data;
};

export const postServerData = async (url, data) => {
  const res = await axios.post(url, data);
  return res?.data;
};
