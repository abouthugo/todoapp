function TodoItem({ todo }) {
  return (
    <li className="rounded-lg shadow-md bg-white" key={todo.id}>
      <div className="p-5 flex flex-row space-x-2">
        <div role="button">
          <button role="button" className="align-middle">
            <div className="w-5 h-5 border-black rounded-full border-2"></div>
          </button>
        </div>
        <p>{todo.content}</p>
      </div>
    </li>
  );
}

export default function TodoList({ todos }) {
  return (
    <ul className="max-w-2x w-full grid grid-rows-4 gap-y-3 mx-auto">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
      <li className="hover:cursor-pointer"> + Add Task</li>
    </ul>
  );
}
