import React, { useState, VFC } from "react";
import { useActiveForm } from "../../context/ActiveFormsContext";
import TaskForm from "./TaskForm";

const AddTask: VFC<ATFProps> = function AddTask({ handleNewTask }) {
  const ADD_TASK_ID = "adding-task";
  const { editNode, setEditNode } = useActiveForm();
  // Boolean that tracks whether the input elements should be displayed or not
  const [isAddingTask, setIsAddingTask] = useState(false);

  const openForm = () => {
    setEditNode(ADD_TASK_ID);
    setIsAddingTask(true);
  };

  const closeForm = () => {
    setEditNode(null);
    setIsAddingTask(false);
  };

  if (isAddingTask && editNode === ADD_TASK_ID) {
    return (
      <TaskForm
        handleOnSubmit={handleNewTask}
        handleOnCancel={closeForm}
        buttonLabel="Add Task"
      />
    );
  }

  return (
    <div
      className="hover:cursor-pointer text-neutral-400 hover:text-neutral-600"
      key="add-task"
      role="button"
      onClick={openForm}
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
