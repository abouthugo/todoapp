import { useRef, useState, VFC } from "react";
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

const TaskForm: VFC<TaskFormProps> = function TaskForm({
  handleOnSubmit,
  initialTask,
  buttonLabel,
  handleOnCancel,
}) {
  // Reference to the Input element for the Tasks's name
  const inputRef = useRef(null);

  // Controlled form properties
  const [task, setTask] = useState(initialTask || getBlankTask());

  /**
   * Sets the task state to a blank object and generates a new id.
   */
  const resetTask = () => {
    setTask(getBlankTask());
  };

  /**
   * Handler for when the form is submitted. It triggers the function provided from
   * the parent component, resets the local state, and focuses on the input element.
   */
  const submitHandler = () => {
    handleOnSubmit(task);
    resetTask();
    if (buttonLabel === "Add Task") inputRef.current.focus();
  };

  /**
   * Function that handles any changes to the name input
   * @param e
   */
  const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      name: e.target.value,
    });
  };

  /**
   * Function that handles any changes to the description text area
   * @param e
   */
  const handleOnDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTask({
      ...task,
      description: e.target.value,
    });
  };

  /**
   * Function that handles changes to the priority dropdown
   * @param n
   */
  const handleOnPrioritySet = (n: number) => {
    setTask({ ...task, priority: n });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    // When user press "ENTER" in the task name input we want to submit the form
    if (
      e.key === "Enter" &&
      task.name.length &&
      inputRef.current === e.target
    ) {
      submitHandler();
    } else if (e.key === "Escape") {
      resetTask();
      handleOnCancel();
    }
  };

  // Tracks whether the dropdown is active or not
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleEdit = () => {
    setDropdownActive(!dropdownActive);
  };

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
          onClick={submitHandler}
          disabled={!task.name.length}
        >
          {buttonLabel}
        </button>
        <button
          role="button"
          className="w-auto self-start border-neutral-300 border-2 rounded-md px-3 font-medium py-1 mt-2 hover:bg-neutral-100"
          onClick={handleOnCancel}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

interface TaskFormProps {
  handleOnSubmit: (task: Task) => void;
  buttonLabel: "Add Task" | "Save";
  handleOnCancel: () => void;
  initialTask?: Task;
}

export default TaskForm;
