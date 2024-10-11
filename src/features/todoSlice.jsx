import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id: 1, todoName: "Buy Milk", todoDate: "09-12-2023"}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {id: nanoid(), todoName: action.payload.todoName, todoDate: action.payload.todoDate}
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload)
    }
  }
})

export default todoSlice.reducer

export const {addTodo, removeTodo} = todoSlice.actions