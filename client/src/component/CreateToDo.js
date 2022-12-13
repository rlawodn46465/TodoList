import React from "react";
import styled from "styled-components";
import Header from "./Header";
import dumy from "../data/dumy";

const CreateToDoBox = styled.div`
  width: 400px;
  height: 100%;
  background-color: lightcoral;
`;

const CreateToDo = () => {
  const handleSubmit = (e) => {
    const 더미 = {
      id: "test",
      title: "더미",
      desc: "더미",
      date: "2022.12.13",
      iscomplete: false,
    };
    console.log('클릭');
    fetch('http://localhost:3000', {
      method: "POST",
      body: JSON.stringify(더미),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      
    })
  };

  return (
    <CreateToDoBox>
      <Header headText={"Create ToDo"} />
      <h1>제목</h1>
      <input type="text" />
      <h2>날짜</h2>
      <input type="date" />
      <h2>내용</h2>
      <textarea />
      <button onClick={handleSubmit}>저장</button>
    </CreateToDoBox>
  );
};

export default CreateToDo;
