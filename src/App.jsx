import Heading from "./components/Heading"
import TodoLists from "./components/TodoLists"

function App() {

  return (
    <div id="container" className="h-auto w-[80vw] md:w-[60vw] 2xl:w-[40vw] bg-black rounded-xl">
      <Heading />
      <TodoLists />
    </div>
  )
}

export default App
