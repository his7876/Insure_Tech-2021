import axios from "axios";
import React, { useState } from "react";
import Cipher from "../lib/crypto_api";

const InsurePage = () => {
  const [result, setResult] = useState(undefined);
  const [searchInput, setsearchInput] = useState("");
  const [searchPWDInput, setsearchPWDInput] = useState("");
  const [enMessage, setenMessage] = useState("");
  
  const [insureList, setinsureList] = useState([]);
  const handleSearchInput = (e) => {
    const { name , value } = e.target;
    if(name == "id"){
      setsearchInput(value);
    }
    else if (name == "pwd"){
      setsearchPWDInput(value);
    }
   
  };

  const getInsureInfo = () => {
    setenMessage(Cipher.makeAES(searchPWDInput));
    console.log(enMessage);
    console.log(searchInput);

    const option = {
      method: "POST",
      url: "/scrap/pfm/credit4u/IntegratedInquiry",
      headers: {
        Authorization: "Token {사용자 발급 토큰}",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        LOGINID : searchInput,
        LOGINPWD : enMessage
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      setResult(response.data);
    });
  };
  return (
    <div>
      아이디입력 : <input name = "id" onChange = {handleSearchInput}></input> <br/>
      패스워드 입력: <input name = "pwd" onChange = {handleSearchInput}></input><br/>    
      <button onClick={getInsureInfo}>보험 조회하기</button>
    </div>
  );
};

export default InsurePage;
