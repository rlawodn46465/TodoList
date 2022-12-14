import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateToDoBox = styled.div`
  width: 400px;
  height: 100%;
  background-color: lightcoral;
`;


const CreateToDo = ({listId}) => {
  const navigate = useNavigate();
  const stringChange = (obj) => {
    let parmas = '';
    for(const [key, value] of Object.entries(obj)){
      parmas += `${key}=${value}&`
    }
    return parmas = parmas.slice(0, -1);
  }
  const handleSubmit = (e) => {
    const list = {
      id : listId,
      title : title,
      desc : desc,
      date : date.replace(/-/g, '.'),
      iscomplete : false
    }
    axios.post(`http://localhost:8080/create?${stringChange(list)}`)
    .then((res) => {
      console.log(res.data);
      navigate('/')
      window.location.reload();
    }).catch(err => {
      console.log(err);
    });
  };

  const handleInput = (e) => {
    const target = e.target.name;
    if(target === "title"){
      setTitle(e.target.value);
    } else if(target === "desc"){
      setDesc(e.target.value);
    } else if(target === "date"){
      setDate(e.target.value);
    }
  }

  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [date, setDate] = useState('');
  
  return (
    <CreateToDoBox>
      <Header headText={"Create ToDo"} />
      <h1>제목</h1>
      <input type="text" name="title" onChange={(e)=>{handleInput(e)}} />
      <h2>날짜</h2>
      <input type="date" name="date" onChange={(e)=>{handleInput(e)}}/>
      <h2>내용</h2>
      <textarea name="desc" onChange={(e)=>{handleInput(e)}}/>
      <button onClick={handleSubmit}>저장</button>
    </CreateToDoBox>
  );
};

export default CreateToDo;
