import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import "./List.css";

const ListBox = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 5px;
  width: 400px;
  height: 50px;
  background-color: lightblue;
`;

const List = ({list, setUpdateData}) => {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(list.iscomplete==='true');
  const checkHandler = ({ target }) => {
    setIsComplete(!isComplete);
  };
  const listDelete = () => {
    axios.delete('http://localhost:8080/delete?'+'id='+list.id)
    .then(res => {
      console.log(res.data);  
      navigate('/')
      window.location.reload();   
    })
  }

  const listUpdate = () => {
    const obj ={
      id : list.id,
      permit : false
    }
    setUpdateData(obj);
  }

  return (
    <ListBox>
      <input
        className="list_chekbox"
        type="checkbox"
        checked={isComplete}
        onChange={(e) => checkHandler(e)}
      />
      <div>
        {list.title}
      </div>
      <div>
        {list.date}
      </div>
      <button onClick={listUpdate}>
        수정
      </button>
      <button onClick={listDelete}>
        삭제
      </button>
    </ListBox>
  );
};

export default List;
