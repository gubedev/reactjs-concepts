import React, { useState } from "react";

const Checklist = ({ items }) => {
  const [checklistItems, setChecklistItems] = useState(items);
  
  const handleClick = (itemIndex) => {    
    const toggledItem = { ...checklistItems[itemIndex] };
    toggledItem.completed = !toggledItem.completed;
    setChecklistItems([
      ...checklistItems.slice(0, itemIndex),
      toggledItem,
      ...checklistItems.slice(itemIndex + 1),
    ]);
  };

  const allTasksCompleted = checklistItems.every(({ completed }) => completed);

  return (
    <div>
      <form>
        {checklistItems.map((item, index) => (
          <React.Fragment key={item.description}>
            <input
              onChange={() => handleClick(index)}
              type="checkbox"
              className="checkbox"
              checked={item.completed ? true : false}
              id={item.description}
            />
            <label htmlFor={item.description}>{item.description}</label>
          </React.Fragment>
        ))}
      </form>
      <TasksCompletedMessage
        visible={allTasksCompleted}
      >
        All tasks completed{" "}
        <span role="img" aria-label="checkmark">
          ✅
        </span>
      </TasksCompletedMessage>
    </div>
  );
};

const TasksCompletedMessage = ({ visible }) => {
  return <div>completed : {visible ? "all completed" : "pending"}</div>
}

export default Checklist;
