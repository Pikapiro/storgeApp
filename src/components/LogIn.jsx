import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LogIn(props) {
  const nev = useNavigate();
  const [inputId, setInputId] = useState("");
  const logIn = () => {
    props.arr.forEach((ele) => {
      console.log(ele.id);
      if (ele.id == inputId) {
        props.log(inputId);
        nev("/worker");
      } else if (inputId == 99999) {
        props.log(inputId);
        nev("/manager");
      } else if (ele.id != inputId) {
        alert("the user is not exsits");
      }
    });

    // if (inputId == 99999) {
    //   nev("/manager");
    // } else {
    //   nev("/worker");
    // }
  };

  return (
    <div>
      <p> id:</p>
      <input
        type="text"
        placeholder="please enter your id"
        onChange={(ele) => {
          setInputId(ele.target.value);
        }}
      />

      <button
        onClick={() => {
          logIn();
        }}
      >
        enter
      </button>
    </div>
  );
}
