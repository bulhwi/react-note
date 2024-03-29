import { all, takeEvery, call, put } from "redux-saga/effects";
import { actions, Types } from "./index";
import { callApi } from "../../common/util/api";
import { makeFetchSaga } from "../../common/util/fetch";

function* fetchUser({ name }) {
  const { isSuccess, data } = yield call(callApi, {
    url: "/user/search",
    params: { keyword: name },
  });

  if (isSuccess && data) {
    const user = data.find((item) => item.name === name);
    if (user) {
      yield put(actions.setValue("user", user));
    }
  }
}

export default function* () {
  yield all([
    // takeEvery(Types.FetchUser, fetchUser),
    takeEvery(
      Types.FetchUser,
      makeFetchSaga({ fetchSaga: fetchUser, canCache: false })
    ),
  ]);
}
