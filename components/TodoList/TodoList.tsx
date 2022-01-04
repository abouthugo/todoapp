import TodoItem from "./TodoItem";

const TodoList: React.FC<TodoListProps> = function TodoList({
  todos,
  onTaskChange,
}) {
  return (
    <>
      <ul className="max-w-2x w-full grid gap-y-4 mx-auto mb-6">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key="TodoItemList"
            onTaskChange={onTaskChange}
          />
        ))}
      </ul>
    </>
  );
};

interface TodoListProps {
  todos: Task[];
  onTaskChange: (task: Task) => void;
}

export default TodoList;
