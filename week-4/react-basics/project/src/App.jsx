import {React} from "react";
import { useState } from "react";
let id=1;
function App() {

  const [todos, updateTodos]= useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function input1(e){
    setTitle(e.target.value);
  }
  function input2(e){
    setDescription(e.target.value);
  }
  function addTodo(){
    
    updateTodos([...todos, {
      title,
      description,
      id
    }]);
    id=id+1;
    setTitle("");
    setDescription("");
  }
  return (
    <>
    <input value={title} onChange={input1} placeholder="Enter the title"></input> <br></br>
    <input value={description} onChange={input2} placeholder="Enter the description"></input> <br></br>
    <button onClick={addTodo}>Add todo</button>
    <RenderTodos todos={todos} updateTodos={updateTodos}/>
    </>
  )
}
function RenderTodos({todos,updateTodos}){
  function removeTodo(id){
    updateTodos(todos.filter((pass)=> pass.id !== id))
  }
  return todos.map((todo) => <div key={todo.id}>
    {todo.title} <button onClick={()=>{removeTodo(todo.id)}}> Remove todo</button> <br></br>
    {todo.description}
    </div>)
}
export default App;