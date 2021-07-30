import React , {useState} from 'react';
import Header from "../components/Header";
import axios from 'axios';
import HospitalListItem from '../components/hospital/HospitalCardItem';
const HospitalListPage = () => {

  const [searchInput, setsearchInput] = useState("");
  const [hospitalList, sethospitalList] = useState([]);
  const handleSearchInput = (e) => {
    const { value } = e.target;
    setsearchInput(value);
  };
    const getHospitalList = () => {
      const option = {
        method: "GET",
        url: "/B551182/hospInfoService1/getHospBasisList1",
        headers: {},
        params: {
          ServiceKey:
            "api key",
          pageNo: "1",
          numOfRows: "10",
          yadmNm: searchInput,
        },
      };

    axios(option).then((response) => {   
      console.log(response.data);
      sethospitalList(response.data.response.body.items.item);     
    });
  };
  return (
    <div>
      <Header title="병원검색"></Header>
      <input onChange={handleSearchInput}></input>
      <button onClick={getHospitalList}>병원 조회하기</button>
      {hospitalList.map(({ addr, clCd, clCdNm, yadmNm, ykiho }) => {
        return (
          <HospitalListItem
            key={ykiho}
            addr={addr}
            clCd={clCd}
            clCdNm={clCdNm}
            yadmNm={yadmNm}
            ykiho={ykiho}
          ></HospitalListItem>
        );
      })}
    </div>
  );
};

export default HospitalListPage
