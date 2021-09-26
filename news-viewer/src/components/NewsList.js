import React, {useState, useEffect} from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=0f2f5583972e4103aea1a64865a395cc`,);
  }, [category]);

  // 대기중일 때
  if(loading) {
    return <NewsListBlock>대기중...</NewsListBlock>
  }

  // 아직 response  값이 설정되 않았을 때
  if(!response) {
    return null;
  }

  // 에러가 발생했을때
  if(error) {
    return <NewsListBlock>에러 발생.</NewsListBlock>
  }

  // response 값이 유효할때
  const {articles} =  response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  )
}

export default NewsList;