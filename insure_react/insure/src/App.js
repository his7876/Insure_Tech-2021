import Header from "./components/Header";
import { useState } from "react";
import ListPage from "./pages/ListPage";

const Element = ({ username }) => {
  return (
    <>
      <h1>안녕하세요 {username} 새로운 컴포넌트 입니다.</h1>
    </>
  );
};

function App() {
  // let userInput = "test";
  const [userInput, setUserInput] = useState("초기값");
  const inputChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setUserInput(value);
  };

  const clickButton = () => {
    console.log("사용자가 버튼을 클릭했습니다.");
  };

  return (
    <div>
      <Header title="테스트 페이지"></Header>
      <Element username={"test"}></Element>
      <b> 사용자 입력 값 : {userInput}</b>
      <br />
      <input onChange={inputChange}></input>
      <button onClick={clickButton}>클릭 이벤트의 바인딩</button>
      <ListPage></ListPage>
    </div>
  );
}

export default App;
