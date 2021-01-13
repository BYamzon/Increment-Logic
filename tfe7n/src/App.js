import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);
  let [increment, setIncrement] = useState(1);

  // function addExample(myNumber) {
  //   return myNumber + 1;
  // }
  // console.log(addExample(10));
  //this function is going to add or subtract by increment
  //and if increment is plus or minus 10, it will reset
  function myCounter(myMathOperation) {
    console.log("Hello");

    //check if count is >10 or >-10
    //reset to 0 if the above is true

    if (count >= 10 || count <= -10) {
      console.log("Hey, it's greater or less than: ", count);
      setCount((count = 0));
    }

    if (myMathOperation === "add") {
      //check if setCount in line 29 is >10, reset count to 0.
      //if not, do line 29
      setCount((count = count + increment));
    } else if (count >= 10) {
      setCount((count = 0));
    } else if (myMathOperation === "subtract") {
      //check line 37 is <-10. reset to 0.
      //if not, do line 37
      setCount((count = count - increment));
    } else {
      setCount(0);
    }

    console.log(`Increment is now:${increment}`);
  }

  // if (myCounter >= 10) {
  //   setCount(count(0));
  // } else if (myCounter <= -10) {
  //   setCount(count(0));
  // }

  function myIncrement() {
    if (increment === 1) {
      setIncrement((increment = 2));
    } else {
      setIncrement((increment = 1));
    }
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <h2>Our count is: {count} </h2>
      <h2>Our increment is: {increment} </h2>
      <button onClick={() => myCounter("add")}> + </button>
      <button onClick={() => myCounter("subtract")}> - </button>
      <button onClick={() => myCounter()}> Reset </button>
      <button onClick={() => myIncrement()}> Increment </button>
    </div>
  );
}
