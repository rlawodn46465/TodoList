import "./App.css";
import CalendarComponent from "./component/CalendarComponent";
import CheckList from "./component/CheckList";
import 'react-calendar/dist/Calendar.css';
import CreateToDo from "./component/CreateToDo";

function App() {
  return (
    <div className="main">
      <CheckList />
      <CalendarComponent/>
      <CreateToDo/>
    </div>
  );
}

export default App;
