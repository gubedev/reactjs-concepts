import Checklist from "./ChecklistFunctionalComponent"
import React from "react";

const checklistItemsFunctionalComponent = [
  {
    description: "task 1 (functional component)",
    completed: false,
  },
  {
    description: "task 2 (functional component)",
    completed: false,
  },
];

const TestingStateful = () => {
  return <div>
      <Checklist items={checklistItemsFunctionalComponent} />
  </div>;
};

export default TestingStateful;
