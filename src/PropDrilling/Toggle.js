import React from 'react';
import Switch from "./Switch";

function Toggle() {
    const [on, setOn] = React.useState(false)
    const toggle = () => setOn(o => !o)
    return <Switch on={on} onToggle={toggle} />
  }

export default Toggle;