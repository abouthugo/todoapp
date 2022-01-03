import React, { useState, useRef, VFC } from "react";
import { v4 } from "uuid";
import FlagButton from "./FlagButton";
import PriorityDropDown from "./PriorityDropDown";

/**
 * Generated a
 * @returns Task
 */
function getBlankTask(): Task {
  return {
    id: v4(),
    name: "",
    priority: 4,
    completed: false,
  };
}

const AddTask: VFC<ATFProps> = function AddTask({ handleNewTask }) {
  // Reference to the Input element for the Tasks's name
  const inputRef = useRef(null);

  // Boolean that tracks whether the input elements should be displayed or not
  const [isAddingTask, setIsAddingTask] = useState(false);

  // local instance of the task that is being created
  const [task, setTask] = useState(getBlankTask());

  // Tracks whether the dropdown is active or not
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleIsOpen = () => {
    setIsAddingTask(!isAddingTask);
  };

  /**
   * Sets the task state to a blank object and generates a new id.
   */
  const resetTask = () => {
    setTask(getBlankTask());
  };

  const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      name: e.target.value,
    });
  };

  const handleOnDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTask({
      ...task,
      description: e.target.value,
    });
  };

  /**
   * Handler for when a new task is added. It triggers the function to add a task from
   * the parent component, resets the local state, and focuses on the input element.
   */
  const handleOnNewTask = () => {
    handleNewTask(task);
    resetTask();
    inputRef.current.focus();
  };

  const handleOnPrioritySet = (n: number) => {
    setTask({ ...task, priority: n });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && task.name.length) {
      handleOnNewTask();
    } else if (e.key === "Escape") {
      resetTask();
      toggleIsOpen();
    }
  };

  const toggleEdit = () => {
    setDropdownActive(!dropdownActive);
  };

  if (isAddingTask) {
    return (
      <>
        <div className="flex flex-col w-full border-neutral-200 border-2 rounded-md py-2 px-3 focus-within:border-neutral-400">
          <input
            type="text"
            name="task-name"
            placeholder="Task name"
            className="font-medium my-2 outline-none"
            onChange={handleOnNameChange}
            value={task.name}
            ref={inputRef}
            onKeyDown={onKeyDown}
            autoFocus
          />
          <textarea
            name="task-description"
            placeholder="Description"
            className="placeholder-normal outline-none"
            onChange={handleOnDescriptionChange}
            value={task.description || ""}
            onKeyDown={onKeyDown}
            rows={3}
          />
          <div className="relative flex justify-end">
            <FlagButton
              isActive={dropdownActive}
              onClick={toggleEdit}
              priority={task.priority}
            />
            <PriorityDropDown
              handleOnClick={handleOnPrioritySet}
              active={dropdownActive}
            />
          </div>
        </div>
        <div>
          <button
            role="button"
            className="w-auto self-start rounded-md px-3 font-medium py-1 mt-2 mr-4 bg-neutral-800 text-white disabled:cursor-not-allowed disabled:bg-neutral-400"
            onClick={handleOnNewTask}
            disabled={!task.name.length}
          >
            Add Task
          </button>
          <button
            role="button"
            className="w-auto self-start border-neutral-300 border-2 rounded-md px-3 font-medium py-1 mt-2 hover:bg-neutral-100"
            onClick={toggleIsOpen}
          >
            Cancel
          </button>
        </div>
      </>
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
