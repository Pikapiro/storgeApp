import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

export default function Worker(props) {
  const func = () => {
    if (props.lp.forkLift == true) {
      return <p>fork lift license : yes</p>;
    } else return <p>fork lift license : no</p>;
  };

  return (
    <div>
      <h1> wolcome {props.lp.fullname}</h1>

      <div>
        <h3>full name: {props.lp.fullname}</h3>
        <p>id : {props.lp.id}</p>
        {func()}
      </div>
      <h2>list of items</h2>

      {props.arr.map((ele) => {
        return (
          <Item
            name={ele.name}
            id={ele.id}
            forkLift={ele.forkLift}
            inPlace={props.inPlace}
            f={props.up}
          />
        );
      })}
      <Link to="/">
        {" "}
        <button>Log out</button>
      </Link>
    </div>
  );
}
