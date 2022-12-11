import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp(props) {
  const nev = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [fork, setFork] = useState("");

  const checkValid = () => {
    if (id.length < 5 || isNaN(id)) {
      alert("please put a valid id");
    }
    if (!name.includes(" ") || name.length < 4) {
      alert("please put a valid name");
    } else props.add(id, name, fork);
    nev("/");
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <p>id:</p>
      <input
        type="text"
        placeholder="id"
        onChange={(ele) => {
          setId(ele.target.value);
        }}
      />
      <p>full name</p>
      <input
        type="text"
        placeholder="full name"
        onChange={(ele) => {
          setName(ele.target.value);
        }}
      />
      <div>
        <p>yes</p>
        <input
          type="radio"
          name="forkLift"
          id="a"
          value="yes"
          onChange={(ele) => {
            setFork(ele.target.value);
          }}
        />
        <p>no</p>
        <input
          type="radio"
          name="forkLift"
          id="b"
          value="no"
          defaultChecked
          onChange={(ele) => {
            setFork(ele.target.value);
          }}
        />
      </div>

      <button
        onClick={() => {
          checkValid();
        }}
      >
        Enter
      </button>
    </div>
  );
}
