import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import Main from "./components/Main";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Worker from "./components/Worker";
import Manager from "./components/Manager";

function App() {
  // const nev = useNavigate();
  const [workers, setWorkers] = useState([]);
  const [itemes, setItems] = useState([
    { id: 12345, name: "green-box", forkLift: false, inPlace: false },
    { id: 12346, name: "black-box", forkLift: false, inPlace: false },
    { id: 12347, name: "yellow-box", forkLift: true, inPlace: false },
    { id: 12348, name: "blue-box", forkLift: true, inPlace: false },
    { id: 12349, name: "blue-box", forkLift: false, inPlace: false },
  ]);
  const [wo, setWo] = useState({});

  const loggedUser = (id) => {
    console.log(id);
    workers.map((ele) => {
      console.log(ele);
      if (id == 99999) {
        alert("hello manager");
      }
      if (ele.id == id) {
        ele.storegeVisit++;
        setWorkers([...workers]);
        setWo(ele);
      }
    });
  };

  const upDate = (id) => {
    const newItems = [...itemes];
    const index = itemes.findIndex((i) => i.id == id);

    newItems[index].inPlace = true;
    workers.map((ele) => {
      // wo.howMuch++;
      // setWo({ ...wo });
      ele.howMuch++;
      setWorkers([...workers]);
    });
    setItems(newItems);
  };

  const add = (i, n, f) => {
    // workers.map((ele) => {
    //   // if (ele.id == i) {
    //   //   alert("the user is exsits");
    //   // } else {

    // });
    let work = new worker(i, n, f);

    setWorkers([...workers, work]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signIn"
            element={<LogIn log={loggedUser} arr={workers} />}
          />
          <Route path="/signUp" element={<SignUp add={add} arr={workers} />} />
          <Route
            path="/worker"
            element={<Worker lp={wo} arr={itemes} up={upDate} />}
          />
          <Route path="/manager" element={<Manager />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

class worker {
  storegeVisit = 0;
  howMuch = 0;
  constructor(id, fullname, forkLift) {
    this.id = id;
    this.fullname = fullname;
    this.forkLift = forkLift;
  }
}
