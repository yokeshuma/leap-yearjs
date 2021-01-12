//Importing react modules
import React, { useState } from "react";
import "./styles.css";

//Main App Component
export default function App() {
  //State for displaying message
  let [message, setMessage] = useState("");

  //Declared global variable
  var userInput;

  //Input handler for getting inputs
  function inputHandler(e) {
    userInput = e.target.value;
  }

  //Main Checker Function
  function leapChecker(input) {
    //Converting string to int
    parseInt(userInput);

    //Conditions
    if (input % 400 === 0 || (input % 4 === 0 && input % 100 !== 0)) {
      setMessage("You were born in a leap year");
    } else {
      setMessage("You were not born in a leap year");
    }
  }

  //Button Clikc Handler
  function clickHandler() {
    if (userInput == null) {
      setMessage("Field should not be empty");
    } else if (isNaN(userInput)) {
      setMessage("Please enter input in numbers");
    } else {
      leapChecker(userInput);
    }
  }

  return (
    <div className="card">
      <h1 className="header">Leapy Year</h1>

      <div className="form-column">
        <label>Enter your birth year</label>
        <input
          type="text"
          onChange={inputHandler}
          className="field"
          placeholder="2000"
        ></input>
        <button onClick={clickHandler} className="button">
          Submit
        </button>

        <h1 className="message">{message}</h1>
      </div>
    </div>
  );
}
