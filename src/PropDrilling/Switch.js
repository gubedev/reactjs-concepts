import React from 'react';
import SwitchButton from "./SwitchButton";
import SwitchMessage from "./SwitchMessage";

function Switch({on, onToggle}) {
    return (
      <div>
        <SwitchMessage on={on} />
        <SwitchButton onToggle={onToggle} />
      </div>
    )
  }

export default Switch;