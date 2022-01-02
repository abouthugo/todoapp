import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

function TodoItem({ todo }: TodoProps) {
  // Get the color of the round circle according to the priority of the task
  const getBorderColor = () => {
    const color = getColorFromPriority(todo.priority);
    return `border-${color}-600 bg-${color}-50`;
  };

  return (
    <li
      className="rounded-lg border-neutral-200 border-2 shadow-sm bg-white"
      key={todo.id}
    >
      <div className="p-5 flex flex-row space-x-2">
        <div role="button">
          <button role="button" className="align-middle">
            <div
              className={`w-5 h-5 ${getBorderColor()}  rounded-full border-2`}
            ></div>
          </button>
        </div>
        <div>
          <p>{todo.name}</p>
          {todo.description && (
            <p className="text-sm text-neutral-400">{todo.description}</p>
          )}
        </div>
      </div>
    </li>
  );
}

interface TodoProps {
  todo: Task;
}

export default function TodoList({ todos, handleNewTask }: TodoListProps) {
  const [isInputOpen, setisInputOpen] = useState(false);
  const toggleIsOpen = () => {
    setisInputOpen(!isInputOpen);
  };

  return (
    <>
      <h1 className="border-b-2 mb-6">Inbox</h1>
      <ul className="max-w-2x w-full grid gap-y-4 mx-auto mb-6">
        {todos.map((todo) => (
          <TodoItem todo={todo} key="TodoItemList" />
        ))}
      </ul>
      <AddTaskForm
        isOpen={isInputOpen}
        toggleIsOpen={toggleIsOpen}
        handleNewTask={handleNewTask}
      />
    </>
  );
}
84;
interface TodoListProps {
  todos: Task[];
  handleNewTask: (task: Task) => {};
}

function AddTaskForm({ isOpen, toggleIsOpen, handleNewTask }) {
  const inputRef = useRef(null);
  const [task, settask] = useState(getBlankTask());
  const [editIsActive, seteditIsActive] = useState(false);

  /**
   * Sets the task state to a blank object and generates a new id.
   */
  const resetTask = () => {
    settask(getBlankTask());
  };

  const handleOnNameChange = (e) => {
    settask({
      ...task,
      name: e.target.value,
    });
  };

  const handleOnDescriptionChange = (e) => {
    settask({
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

  const onKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.key === "Enter" && task.name.length) {
      handleOnNewTask();
    } else if (e.key === "Escape") {
      resetTask();
      toggleIsOpen();
    }
  };

  const toggleEdit = () => {
    seteditIsActive(!editIsActive);
  };

  if (isOpen) {
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
            <FlagButton isActive={editIsActive} onClick={toggleEdit} />
            <PriorityControls active={editIsActive} />
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
}

function PriorityControls({ active }) {
  if (!active) return null;
  return (
    <div className="absolute -top-3 -right-6 w-52 border-2 border-neutral-200 bg-white rounded-md shadow-lg mt-10 border-box max-w-52">
      <ul className="">
        {new Array(4).fill(1).map((v, i) => {
          return (
            <li
              role="button"
              className="flex p-1 hover:bg-neutral-100 cursor-pointer"
              key={`priority-control=${i + 1}`}
            >
              <FlagIcon color={getColorFromPriority(i + 1)} />
              <p className="pl-2 text-sm">Priority {i + 1}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );

  /**
   *
   * @param color
   * @returns
   */
  function FlagIcon({ color }) {
    const getClassName = () => {
      if (color === "neutral") {
        return `stroke-${color}-500`;
      }
      return `stroke-${color}-500 fill-${color}-500`;
    };
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="-3 -3 30 30"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={getClassName()}
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      </div>
    );
  }
}

/**
 *
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

/**
 *
 * @param param0
 * @returns
 */
function FlagButton({ isActive, onClick }) {
  // This will be used to handle clicks outside
  let ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClick, isActive]);

  const stroke = isActive ? "stroke-neutral-500" : "stroke-neutral-200";
  const bg = isActive ? "bg-neutral-200" : "";
  return (
    <div role="button" onClick={onClick} ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="-3 -3 30 30"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer rounded-sm ${stroke} ${bg} hover:stroke-neutral-500 hover:bg-neutral-200`}
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    </div>
  );
}

function getColorFromPriority(priority: number) {
  switch (priority) {
    case 1:
      return "red";
    case 2:
      return "orange";
    case 3:
      return "indigo";
    default:
      return "neutral";
  }
}
