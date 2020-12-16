import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import CalculatorOne from "./LiftingStateUp/CalculatorOne";
import ComponentDidMount from "./LifeCycle/componentDidMount";
import ComponentWillMount from "./LifeCycle/componentWillMount";
import Constructor from "./LifeCycle/constructor";
import ContexCounter from "./StateManagmentCounter/ContextCounter";
import ContextWithLogicCounter from "./StateManagmentCounter/ContextWithLogicCounter";
import ContextWithReducerCounter from "./StateManagmentCounter/ContextWithReducerCounter";
import ControlledForms from "./ControlledForms";
import Counter from "./Counter";
import Events from "./Events";
import FetchExample from "./Fetch";
import Forms from "./Forms";
import Home from "./Home";
import LiftStateCounter from "./StateManagmentCounter/LiftStateCounter";
import PropDrilling from "./PropDrilling";
import React from "react";
import Render from "./LifeCycle/render";
import SimpleCounter from "./StateManagmentCounter/SimpleCounter";
import TestingStateful from "./TestingStateful";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/home" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/forms" component={Forms} />
          <Route path="/controlled-forms" component={ControlledForms} />
          <Route path="/life-cycle-constructor" component={Constructor} />
          <Route path="/life-cycle-willmount" component={ComponentWillMount} />
          <Route path="/life-cycle-render" component={Render} />
          <Route path="/life-cycle-didmount" component={ComponentDidMount} />
          <Route path="/fetch-example" component={FetchExample} />
          <Route path="/prop-drilling" component={PropDrilling} />
          <Route path="/simple-counter" component={SimpleCounter} />
          <Route path="/lift-state-counter" component={LiftStateCounter} />
          <Route path="/context-counter" component={ContexCounter} />
          <Route path="/context-with-logic-counter" component={ContextWithLogicCounter} />
          <Route path="/context-with-reducer-counter" component={ContextWithReducerCounter} />
          <Route path="/lifting-stateup-calculator-one" component={CalculatorOne} />
          <Route path="/testing-stateful" component={TestingStateful} />
        </Switch>
      </Router>
      {props.children}
    </div>
  );
}

export default App;
