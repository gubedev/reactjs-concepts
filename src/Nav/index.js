import { Link } from "react-router-dom"
import React from "react";
import logo from "../logo.svg";

const Nav = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React concepts.</p>
        <Link to="/counter" className="App-link">
          Counter-Class component
        </Link>
        <Link to="/events" className="App-link">
          Events
        </Link>
        <Link to="/forms" className="App-link">
          Forms
        </Link>
        <Link to="/controlled-forms" className="App-link">
          Controlled Forms
        </Link>
        <Link to="/life-cycle-constructor" className="App-link">
          LifeCycle - Constructor
        </Link>
        <Link to="/life-cycle-willmount" className="App-link">
          LifeCycle - ComponentWillmount
        </Link>
        <Link to="/life-cycle-render" className="App-link">
          LifeCycle - Render
        </Link>
        <Link to="/life-cycle-didmount" className="App-link">
          LifeCycle - ComponentDidmount
        </Link>
        <Link to="/fetch-example" className="App-link">
          Fetch
        </Link>
        <Link to="/prop-drilling" className="App-link">
          Props drilling
        </Link>
        <Link to="/simple-counter" className="App-link">
          Simple counter
        </Link>
        <Link to="/lift-state-counter" className="App-link">
          Lift state counter
        </Link>
        <Link to="/context-counter" className="App-link">
          Context counter
        </Link>
        <Link to="/context-with-logic-counter" className="App-link">
          Context with logic counter
        </Link>
        <Link to="/context-with-reducer-counter" className="App-link">
          Context with reducer counter
        </Link>
        <Link to="/lifting-stateup-calculator-one" className="App-link">
          Lifting state up calculator one
        </Link>
        <Link to="/testing-stateful" className="App-link">
          Testing Stateful
        </Link>
      </header>
    </>
  );
};

export default Nav;
