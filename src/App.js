import Header from "./components/Header";
import { useState } from "react";
import Header2 from "./components/Header2";
import React from "react";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'


//create a component with function
{
  /*function App() {
  const name = "Beci";
  const x = true;
  return (
    <div className="container">
      <h1>
        Hello From React!
      </h1>
      <h2>Hello, {name}!</h2>
      <h2> X is it true? {x?"Yes":"Nope"} </h2>
     
     // import the Header component, bellow
     
     <Header>

     </Header>
    
    </div>
  );
    */
}
{
  /*
    class App extends React.Component{
      render(){
        return <h1>Hello, this a Component, 
          what created with class!</h1>
      }
    }
  */
}

//creating component, with arrow function
const App = () => {

  const [showTask, setShowTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Shopping",
      day: "Feb 4th at 4:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Play football",
      day: "Feb 7th at 6:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Clean my room",
      day: "Feb 9th at 6:30pm",
      reminder: false,
    },
  ])

  //delete Task

  const deleteTask = (id) => {

    //console.log('deleted task object = ', id)

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder

  const toggleReminder = (id) => {

    setTasks(tasks.map((task) =>
      task.id == id ? {
        ...task, reminder:
          !task.reminder
      } : task
    ))
  }

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
      {/*
      <h2>In bellow, the 'Header' component rendered!</h2>
      <Header title = {'asdasdasd'} ></Header>
      */}
      <Header2 onAdd={() =>
        setShowTask(!showTask)}
        showTask={showTask}
      />

      { showTask && <AddTask onAdd={addTask}></AddTask>}

      {tasks.length > 0 ? (
        <Tasks tasks2={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />)
        : ('No task to show')
      }
    </div>
  );
};
export default App;
