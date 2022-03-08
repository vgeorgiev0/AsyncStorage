export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';

//@ts-ignore
export const setName = (name: string) => (dispatch) => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};
//@ts-ignore
export const setAge = (age) => (dispatch) => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};
//@ts-ignore
export const increaseAge = (age) => (dispatch) => {
  dispatch({
    type: INCREASE_AGE,
    payload: age,
  });
};
