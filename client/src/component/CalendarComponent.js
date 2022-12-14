import React, { useState } from "react";
import Header from "./Header";
import Calendar from "react-calendar";
import styled from "styled-components";
import "./calendar.css";

const CalendarBox = styled.div`
  width: 400px;
  height: 312.67px;
`;

const CalendarComponent = ({setCheckDay}) => {
  const [value, onChange] = useState(new Date());
  setCheckDay(value.toLocaleDateString().replace(/ /g, "").slice(0, -1));
  return (
    <CalendarBox>
      <Header headText={"Calendar"} />
      <Calendar onChange={onChange} value={value} formatDay={(locale, date) => date.toLocaleDateString('en', {day: "numeric"})}/>
    </CalendarBox>
  );
};

export default CalendarComponent;
