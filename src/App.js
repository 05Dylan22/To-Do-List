import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [todoItems, setTodoItems] = useState([])

  function addTodoItem (e) {
    e.preventDefault()
    setTodoItems(prev => [...prev, inputValue])
    setInputValue("")
  }

  return (
    <div className="App">
      <form>
        <label htmlFor="add-item">Add New Item</label>
        <input autoFocus value={inputValue} onInput={e => setInputValue(e.target.value)} id='add-item' type="text" placeholder='ex: Make Dinner'/>
        <button onClick={addTodoItem}> Add Item</button>
      </form>
      <h1>TO DO:</h1>
        <ul>
          {todoItems.map((item, index) => (
              <li key={index}>{item}
                <button onClick={(e) => {
                  setTodoItems(curr => curr.filter((el) => el !== item))
                  }}>X</button>
              </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
