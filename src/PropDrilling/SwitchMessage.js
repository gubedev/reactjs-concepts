import React from "react";

function SwitchMessage({ on }) {
  return <div>The button is {on ? "on" : "off"}</div>;
}

export default SwitchMessage;
