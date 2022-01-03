import getColorFromPriority from "../lib/priorityColor";

const TodoItem: React.FC<TodoProps> = function TodoItem({ todo }) {
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
};

interface TodoProps {
  todo: Task;
}

export default TodoItem;
