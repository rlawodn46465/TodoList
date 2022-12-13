import React, { useState } from 'react'
import Header from './Header'
import Calendar from 'react-calendar';

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Header headText={'Calendar'}/>
      <Calendar onChange={onChange} value={value}/>
    </div>
  )
}

export default CalendarComponent