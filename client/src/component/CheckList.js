import React, { useEffect, useState } from "react";
import Header from "./Header";
import List from "./List";
import styled from "styled-components";
import axios from "axios";

const CheckListBox = styled.div`
  width: 400px;
  height: 800px;
  background-color: lightblue;
`;

const CheckList = ({checkDay, setListId}) => {
  const [listData, setListData] = useState();
  const [day, setDay] = useState(checkDay);
  useEffect(() => {
    axios.get("http://localhost:8080/read").then((res) => {
    setListData(res.data); 
    if(res.data.length === 0){
        setListId(1)
      } else {
        setListId(Number(res.data[res.data.length - 1].id) + 1)
      }
    });
  }, [checkDay]);

  return (
    <CheckListBox>
      <Header headText={"Check list"} />
      <ul>
        {listData && listData.filter((todo) => todo.date === checkDay).map((list, index) => {
            return <List key={index} list={list}/>;
          })}
      </ul>
    </CheckListBox>
  );
};

export default CheckList;
