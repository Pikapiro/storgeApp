import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Link to="/signIn">
        {" "}
        <button>sign in</button>
      </Link>
      <Link to="/signUp">
        {" "}
        <button>sign up</button>
      </Link>
    </div>
  );
}
