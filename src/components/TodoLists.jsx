import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function TodoLists() {

  let todos = useSelector(state => state.todos)
  console.log(todos)

  return (
    <section>
      {todos.map(todo => <Todo key={todo.id} todoName={todo.todoName} todoId={todo.id} todoDate={todo.todoDate}/>)}
    </section>
  )
}