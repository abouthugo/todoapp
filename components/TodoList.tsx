import { useRef, useState } from "react";

function TodoItem({ todo }) {
  return (
    <li
      className="rounded-lg border-neutral-200 border-2 shadow-sm bg-white"
      key={todo.name}
    >
      <div className="p-5 flex flex-row space-x-2">
        <div role="button">
          <button role="button" className="align-middle">
            <div className="w-5 h-5 border-neutral-600 rounded-full border-2"></div>
          </button>
        </div>
        <p>{todo.name}</p>
      </div>
    </li>
  );
}

export default function TodoList({ todos, handleNewTask }) {
  const [isInputOpen, setisInputOpen] = useState(false);
  const toggleIsOpen = () => {
    setisInputOpen(!isInputOpen);
  };

  return (
    <>
      <h1 className="border-b-2 mb-6">Inbox</h1>
      <ul className="max-w-2x w-full grid gap-y-4 mx-auto mb-6">
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <AddTask
        isOpen={isInputOpen}
        toggleIsOpen={toggleIsOpen}
        handleNewTask={handleNewTask}
      />
    </>
  );
}

function AddTask({ isOpen, toggleIsOpen, handleNewTask }) {
  const defaultTask = {
    id: null,
    name: "",
    description: null,
  };

  const inputRef = useRef(null);
  const [task, settask] = useState(defaultTask);

  const handleOnNameChange = (e) => {
    settask({
      ...task,
      name: e.target.value,
    });
  };

  const handleOnNewTask = () => {
    handleNewTask(task);
    settask({
      id: null,
      name: "",
      description: null,
    });
    inputRef.current.focus();
  };

  const onKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.key === "Enter") {
      handleOnNewTask();
    } else if (e.key === "Escape") {
      settask(defaultTask);
      toggleIsOpen();
    }
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
            rows={3}
          />
        </div>
        <div>
          <button
            role="button"
            className="w-auto self-start rounded-md px-3 font-medium py-1 mt-2 mr-4 bg-neutral-800 text-white"
            onClick={handleOnNewTask}
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
