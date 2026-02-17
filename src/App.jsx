import React, { useState } from "react";
import "./App.scss";

function App() {
  const [temp, setTemp] = useState(34);

  function decrease() {
    const newTemp = temp - 1;
    setTemp(newTemp);
  }

  function increase() {
    const newTemp = temp + 1;
    setTemp(newTemp);
  }

  return (
    <section
      id="wrapper"
      className={
       temp < 15 ? "too-cold"
       : temp< 25 ? "cold"
       : temp<30 ? "warm"
       : "too-warm"
      }
    >
      <header></header>
      <main id="main" className="">
        <p id="temp">{temp}C</p>
        <div id="buttons">
          <button id="decrease" onClick={decrease}>
            Decrease
          </button>
          <button id="increase" onClick={increase}>
            Increase
          </button>
        </div>
      </main>
      <footer></footer>
      <div id="bg-blur"></div>
    </section>
  );
}

export default App;
