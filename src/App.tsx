import './App.scss';
import ActualDate from "./Components/ActualDate";
import {useEffect, useState} from "react";
import {getDate} from "./utilits";
import ShowText from "./Components/ShowText";
import Button from "./Components/Button";

function App() {
  const [actualDate, setActualDate] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  function tick(): void {
    setActualDate(getDate());
  }

  useEffect(() => {
    let intervalID = setInterval(() => tick(), 1000);

    return () => clearInterval(intervalID);
  }, [actualDate]);

  function clickHandler(): void {
    setShowGreeting(!showGreeting)
  }

  return (
    actualDate && <div id="App" className="container-sm bg-dark vh-100 text-light">
      <div className="row greater-block">
          <p className="text-center greater-text">Welcome in addReactCourse!!!</p>
      </div>
        <ActualDate date={actualDate}/>
        <Button text={'Click me'} onClickHandler={clickHandler}/>
      {
        showGreeting && <ShowText text={'The impossible is possible!'}/>
      }
    </div>
  )
}

export default App
