import React, { useState, VFC } from "react";
import TaskForm from "./TaskForm";

const AddTask: VFC<ATFProps> = function AddTask({ handleNewTask }) {
  // Boolean that tracks whether the input elements should be displayed or not
  const [isAddingTask, setIsAddingTask] = useState(false);

  const toggleIsOpen = () => {
    setIsAddingTask(!isAddingTask);
  };

  if (isAddingTask) {
    return (
      <TaskForm
        handleOnSubmit={handleNewTask}
        handleOnCancel={toggleIsOpen}
        buttonLabel="Add Task"
      />
    );
  }

  return (
    <div
      className="hover:cursor-pointer text-neutral-400 hover:text-neutral-600"
      key="add-task"
      role="button"
      onClick={toggleIsOpen}
    >
      {" "}
      + Add Task
    </div>
  );
};

interface ATFProps {
  handleNewTask: (task: Task) => void;
}

export default AddTask;
