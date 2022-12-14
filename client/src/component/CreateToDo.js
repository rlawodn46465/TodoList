import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateToDoBox = styled.div`
  width: 400px;
  height: 100%;
  background-color: lightcoral;
`;


const CreateToDo = ({listId, updateData}) => {
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
  console.log(updateData)
  const handleUpdate = () => {
    const list = {
      id : updateData.id,
      title : title,
      desc : desc,
      date : date.replace(/-/g, '.')
    }
    axios.post(`http://localhost:8080/update?${stringChange(list)}`)
    .then(res => console.log(res.data));
    console.log('수정버튼 누름');
    setbtnCheck(true);
  }
  useEffect(() => {
    updateData && setbtnCheck(updateData.permit);
    updateData.id &&
    axios.get('http://localhost:8080/read')
    .then(res => {
      let filter =  res.data.filter(data => data.id === updateData.id)
      setTitle(filter[0].title);
      setDate(filter[0].date.replace(/\./g,'-'));
      setDesc(filter[0].desc);
    })
  }, [updateData])

  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [date, setDate] = useState('');
  const [btnCheck, setbtnCheck] = useState(true);
  
  return (
    <CreateToDoBox>
      <Header headText={"Create ToDo"} />
      <h1>제목</h1>
      <input type="text" name="title" value={title} onChange={(e)=>{handleInput(e)}} />
      <h2>날짜</h2>
      <input type="date" name="date" value={date} onChange={(e)=>{handleInput(e)}}/>
      <h2>내용</h2>
      <textarea name="desc" value={desc} onChange={(e)=>{handleInput(e)}}/>
      <button onClick={btnCheck ? handleSubmit : handleUpdate}>{btnCheck ? '저장' : '수정'}</button>
    </CreateToDoBox>
  );
};

export default CreateToDo;
