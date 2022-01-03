import TodoItem from "./TodoItem";

const TodoList: React.FC<TodoListProps> = function TodoList({ todos }) {
  return (
    <>
      <ul className="max-w-2x w-full grid gap-y-4 mx-auto mb-6">
        {todos.map((todo) => (
          <TodoItem todo={todo} key="TodoItemList" />
        ))}
      </ul>
    </>
  );
};

interface TodoListProps {
  todos: Task[];
}

export default TodoList;
