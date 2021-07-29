import React, { useState } from "react";
import axios from "axios";
import NewsHeader from "../components/NewsHeader";
import NewsList from "../components/NewsList";

const NewsPage = () => {
  const [searchInput, setsearchInput] = useState("삼성");
  const [searchResultList, setSearchResultList] = useState([]);
  const getData = () => {
    let newsApi = `https://newsapi.org/v2/everything?q=${searchInput}&from=2021-07-21&sortBy=publishedAt&apiKey=0dfeeecc456a4465995b19cd4503ff17&language=ko`;
    axios.get(newsApi).then(function ({data}) {
      const newsData = data;
      console.log(newsData);
      setSearchResultList(newsData.articles);
    });
  };

  const handleSerachInput= (e) => {
    const { value } = e.target;
    console.log("사용자 입력 값  : ", value);
    setsearchInput(value); // 입력 값을 state 로 처리 
  };

  return (
    <div>
      <NewsHeader title = "뉴스 검색"></NewsHeader>
      <input onChange={handleSerachInput}></input>
      <button onClick={getData}>검색</button>
      <NewsList newsData={searchResultList}></NewsList>
    </div>
  );
};

export default NewsPage;