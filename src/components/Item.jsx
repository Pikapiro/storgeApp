import React from "react";

export default function Item(props) {
  const func = () => {
    if (props.forkLift == true) {
      return <p> need a forklift: yes </p>;
    } else return <p>need a forklift: no</p>;
  };
  const f = () => {
    props.f(props.id);
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.id}</h2>
      <h2>{func()}</h2>
      <h2>{props.inPlace}</h2>
      <button
        onClick={() => {
          f();
        }}
      >
        update
      </button>
    </div>
  );
}
