import {createStore} from "redux";

// DOM 레퍼런스
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 타입과 액션 생성함수 정의
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0
};

// 리듀서 함수 정의
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  // action.type에 따라 분기 처리
  switch (action.type) {
    case "TOGGLE_SWITCH":
      return {
        ...state, // 불변성 유지를 해 주어야 한다.
        toggle: !state.toggle
      };
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case "DECREASE" :
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

//render 함수 만들기
const render = () => {
  const state = store.getState(); // 현재 상태를 불러옴.
  // 토글 처리
  if(state.toggle) {
    divToggle.classList.add('active');
  }else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};
render();

// 구독하기
store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};

