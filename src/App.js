import { useState } from "react";
import styles from "./App.module.css";
import Search from "./Components/Search";
import Todo from "./Components/Todo";
function App() {
  const [list, setList] = useState("");
  const [todo, setTodo] = useState([]);
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (list !== "") {
      setTodo([...todo, { text: list, id: Math.random() }]);
      setList("");
    } else {
      alert("please enter some input!");
    }
  };

  const deleteHandler = (id) => {
    setTodo(todo.filter((item) => id !== item.id));
  };

  return (
    <div className={styles.container}>
      <div>
        <form className={styles.formControl} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="text">Text Input</label>
            <textarea
              placeholder="text area"
              onChange={(e) => setList(e.target.value)}
              value={list}
              rows="4"
            ></textarea>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
      <Search setSearch={setSearch} />
      <Todo todo={todo} deleteHandler={deleteHandler} search={search} />
    </div>
  );
}

export default App;
