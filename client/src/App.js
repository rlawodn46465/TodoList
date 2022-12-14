import "./App.css";
import CalendarComponent from "./component/CalendarComponent";
import CheckList from "./component/CheckList";
import 'react-calendar/dist/Calendar.css';
import CreateToDo from "./component/CreateToDo";
import { useState } from "react";

function App() {
  const [listId, setListId] = useState(null);
  const [checkDay, setCheckDay] = useState('');
  return (
    <div className="main">
      <CheckList checkDay={checkDay} setListId={setListId}/>
      <CalendarComponent setCheckDay={setCheckDay}/>
      <CreateToDo listId={listId}/>
    </div>
  );
}

export default App;
