import { useState } from "react";

function App() {
  [todo, setTodo] = useState("");
  [todos.setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
    // console.log(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return; //만일 텅텅 비어있으면 함수를 수행하지 않겠다.
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo(""); //setTodo로 todo를 빈칸으로 만들어주고, 빈칸이 되어버린 todo는 input과 연결되어있으므로, 빈칸이 출력된다.
  };
  return (
    <div>
      <h1> My to dos ({todos.length}) </h1>
      <form onsubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholeder="Write your To-do"
        ></input>
        <button onClick={onSubmit}> Add ToDO </button>
      </form>
    </div>
  );
}

export default App;
