import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 안녕하세요 리액트 입니다. </p>
        <a
          className="App-link"
          href="https://naver.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버로 이동합니다
        </a>
      </header>
    </div>
  );
}

export default App;
