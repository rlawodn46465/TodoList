import React, { useState } from "react";
import styled from "styled-components";
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

const List = ({list}) => {
  const [isComplete, setIsComplete] = useState(list.iscomplete);
  console.log(list);
  const checkHandler = ({ target }) => {
    setIsComplete(!isComplete);
  };

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
      <button>
        delete
      </button>
    </ListBox>
  );
};

export default List;
