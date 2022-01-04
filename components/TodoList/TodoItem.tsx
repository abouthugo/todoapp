import getColorFromPriority from "../lib/priorityColor";
import styles from "../../styles/TodoItem.module.css";
import { useState, FC } from "react";
import TaskForm from "../AddTask/TaskForm";

const TodoItem: FC<TodoProps> = function TodoItem({ todo, onTaskChange }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Get the color of the round circle according to the priority of the task
  const getBorderColor = () => {
    const color = getColorFromPriority(todo.priority);
    return `border-${color}-600 bg-${color}-50`;
  };

  const handleSave = (task: Task) => {
    onTaskChange(task);
    toggleEditMode();
  };

  if (isEditing) {
    return (
      <TaskForm
        handleOnSubmit={handleSave}
        handleOnCancel={toggleEditMode}
        buttonLabel="Save"
        initialTask={todo}
      />
    );
  }
  return (
    <li className={styles["card-trigger"]} key={todo.id}>
      <div className="p-5 flex flex-row space-x-2 relative">
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
        <div className={styles["hover-target"]}>
          <EditIcon onClick={toggleEditMode} />
        </div>
      </div>
    </li>
  );
};

interface TodoProps {
  todo: Task;
  onTaskChange: (task: Task) => void;
}

const EditIcon: React.VFC<EditIconProps> = function EditIcon({ onClick }) {
  return (
    <div
      className="hover:bg-slate-100 rounded-sm"
      role="button"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="-3 -3 30 30"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="cursor-pointer stroke-neutral-300 hover:stroke-neutral-500"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    </div>
  );
};

interface EditIconProps {
  onClick: () => void;
}

export default TodoItem;
