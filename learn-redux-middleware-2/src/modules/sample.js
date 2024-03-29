import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from '../lib/api';
import { startLoading, finishLoading } from "./loading";
// import createRequestThunk from "../lib/createRequestThunk";
import createRequestSaga from "../lib/createRequestSaga";

// 액션 타입을 선언.
// 한 요청당 세개를 만들어야 함.
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수를 생성
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치 합니다.
// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

/*
export const getPost = id => async dispatch => {
  dispatch({type: GET_POST}); // 요청을 시작한 것을 알림.
  try{
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data
    });
  }catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true
    });
    throw e;
  }
};

export const getUsers = () => async dispatch => {
  dispatch({type: GET_USERS}); // 요청을 시작한것을 알림.
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data
    });
  }catch(e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true
    });
    throw e;
  }
};
*/

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);
/*
function* getPostSaga(action) {
  yield put(startLoading(GET_POST)); // 로딩 시작
  // 파라미터로 action을 받아 오면 액션의 정보를 조회할 수 있다.
  try {
    // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있다.
    // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수.
    const post = yield call(api.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data
    });
  } catch(e) {
    // try/catch 문을 사용하여 에러 처리
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true
    });
  }
  yield put(finishLoading(GET_POST)); // 로딩 시작
}

function* getUsersSaga() {
  yield put(startLoading(GET_USERS));
  try {
    const users = yield call(api.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data
    });
  }catch(e) {
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true
    });
  }
  yield put(finishLoading(GET_USERS));
}
*/

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// 초기상태를 선언.
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.
const initialState = {
  post: null,
  users: null
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload
    }),

    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload
    }),
  },
  initialState
);

export default sample;