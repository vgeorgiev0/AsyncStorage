export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const GET_CITIES = 'GET_CITIES';

const API_URL = 'https://mocki.io/v1/d19f75f1-5572-4206-b557-6a4536fa9f7a';

export const getCities = () => {
  try {
    // @ts-ignore
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_CITIES,
          payload: json,
        });
      } else {
        console.log('Something went wrong');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

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
