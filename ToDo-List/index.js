// import React from 'react';
// import ReactDOM from 'react-dom';

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="header">
        <h1>To Do List</h1>
        <img src="to-do-list.png" alt="To Do List" width="40px" height="auto" />
      </div>
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      {/* <div className="quote-generator">
        <div>Need inspiration?</div>
        <div className="quote-display"></div>
      </div> */}
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
