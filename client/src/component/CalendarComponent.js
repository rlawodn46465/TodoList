import React, { useState } from "react";
import Header from "./Header";
import Calendar from "react-calendar";
import styled from "styled-components";
import "./calendar.css";

const CalendarBox = styled.div`
  width: 400px;
  height: 312.67px;
`;

const CalendarComponent = () => {
  const date = new Date()
  const [value, onChange] = useState(new Date());
  const changeDate = e => {
    
  }

  console.log(value.toLocaleDateString());
  return (
    <CalendarBox>
      <Header headText={"Calendar"} />
      <Calendar onChange={onChange} value={value} formatDay={(locale, date) => date.toLocaleDateString('en', {day: "numeric"})}/>
      <div className="text-gray-500 mt-4">
      </div>
    </CalendarBox>
  );
};

export default CalendarComponent;
