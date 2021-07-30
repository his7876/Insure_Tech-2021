import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import axios from "axios";

const HospitalDetail = () => {
  const { search } = useLocation();
  const [result, setResult] = useState();
  const { ykiho } = queryString.parse(search);
  useEffect(() => {
    getHospitalDetailData();
  }, []);

  const getHospitalDetailData = () => {
    const option = {
      method: "GET",
      url: "/B551182/hospDiagInfoService1/getClinicTop5List1",
      headers: {},
      params: {
        ServiceKey:
          "api key",
        pageNo: "1",
        numOfRows: "10",
        ykiho: ykiho,
      },
    };
    axios(option).then((response) => {
      console.log(response.data.response.body.items.item);
      setResult(response.data.response.body.items.item);
    });
  };

  //useEffect 사용해서  <-- 검색을해서 작성을 부탁드립니다.
  //시작하자마자 api 요청을 만들기

  return (
    <div>
      {result !== undefined && (
        <>
          <p>{result.mfrnIntrsIlnsCdNm1}</p>
          <p>{result.mfrnIntrsIlnsCdNm2}</p>
          <p>{result.mfrnIntrsIlnsCdNm3}</p>
          <p>{result.mfrnIntrsIlnsCdNm4}</p>
          <p>{result.mfrnIntrsIlnsCdNm5}</p>
        </>
      )}
      {result === undefined && (
        <>
          <p>현재 등록된 데이터가 없습니다</p>
        </>
      )}
    </div>
  );
};

export default HospitalDetail;
