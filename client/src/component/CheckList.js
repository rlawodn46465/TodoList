import React, { useEffect, useState } from "react";
import Header from "./Header";
import List from "./List";
import styled from "styled-components";
import listData from "../data/dumy"

const CheckListBox = styled.div`
  width: 400px;
  height: 800px;
  background-color: lightblue;
`;

const CheckList = () => {
  return (
    <CheckListBox>
      <Header headText={"Check list"} />
      <ul>
        {listData.map((list, index) => {
          return <List key={index} list={list}/>
        })}
      </ul>
    </CheckListBox>
  );
};

export default CheckList;
