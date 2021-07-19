import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Name";
  return (
    <>
      {name === "Name" ? (
        <h1>Name 입니다.</h1>
      ) : (
        <h1>Name 아닙니다.</h1>
      )}
    </>
  );
}

export default App;
