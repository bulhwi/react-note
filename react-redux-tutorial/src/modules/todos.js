import { createActions, handleActions } from "redux-actions";

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함.
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함.
const TOGGLE = 'todos/TOGGLE'; // todo를 체크.체크해제함.
const REMOVE = 'todos/REMOVE'; // todo를 제거함.

export const changeInput = createActions(CHANGE_INPUT, input => input);

let id = 3; // insert가 호출될 때마다 1씩 더해집니다.
export const insert = createActions(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createActions(TOGGLE, id => id);

export const remove = createActions(REMOVE, id => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'react',
      done: true
    },
    {
      id: 2,
      text: 'redux',
      done: false
    }
  ]
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      todos: state.todos.filter(todo => todo.id !== id),
    }),
    initialState
  }
);

export default todos;