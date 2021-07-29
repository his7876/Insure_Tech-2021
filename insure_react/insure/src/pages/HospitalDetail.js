import React from 'react';
import queryString from queryString;
import { userLocation } from "react-router-dom";

//pharsing data 전달 
const HospitalDetail = () => {
    const { search } = userLocation();
    console.log(search);
    const {ykiho} = queryString.parse(search);
    console.log(ykiho);
    
    //useEffect 사용하여 <- 검색해서 작성
    // 시작하자마자 api 요청을 만들기
    return (
        <div>
            
        </div>
    )
}

export default HospitalDetail
