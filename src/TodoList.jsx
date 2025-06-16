import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) return <p className="list">No Todos</p>

  return (
    <ul className="list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}
