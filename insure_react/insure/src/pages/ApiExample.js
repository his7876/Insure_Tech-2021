import axios from "axios";
import React, { useState } from "react";

const ApiExample = () => {
  const [searchInput, setsearchInput] = useState("북가좌동");
  const handleSearchInput = (e) => {
    const { value } = e.target;
    setsearchInput(value);
  };
  const getPharmacyData = () => {
    const url = `/B551182/pharmacyInfoService/getParmacyBasisList?ServiceKey=1NvKefm2fOrfb395qHYCmXF13MDkSMGUXqRR9Nxuo%2B8kAeiFzaI7%2FzaBa7mzym8ahgIg1AmD%2FsdRaRZGurwGGg%3D%3D&pageNo=1&numOfRows=10&emdongNm=${searchInput}`;
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  };
  return (
    //행정동명으로 약국을 조회한후 console.log 로 해당하는 데이터 리스폰스 받아 출력
    <div>
      <input onChange={handleSearchInput}></input>
      <button onClick={getPharmacyData}>약국 조회하기</button>
    </div>
  );
};

export default ApiExample;
