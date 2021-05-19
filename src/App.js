import Header from "./components/Header"
import { useState, useEffect } from "react"
import Header2 from "./components/Header2"
import React from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

//create a component with function
{
  /*function App() {
  const name = "Beci" 
  const x = true 
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
  ) 
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
  const [tasks, setTasks] = useState([])
  /* mivel a db.json-ba tároltok el az adataink
      így, az lesz adatbázisunk
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
    },*/

  //GET/(READ) request, render the data from server (localhost:5000/tasks)
  useEffect(async () => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    console.log(data)
    return data
  }


  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    console.log(data)
    return data
  }

  //delete Task, from UI
  /*
  const deleteTask = (id) => {
    console.log('deleted task object = ', id)
    setTasks(tasks.filter((task) => task.id !== id)) 
  } 
  */

  //Delete Task from server
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Add to server
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  //Toggle reminder, Update the reminder in server

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder }
          : task
      )
    )
  }

  //Toggle reminder, in UI
  /*const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      )
    ) 
  } */

  //Add Task to UI
  /*
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1 

    const newTask = { id, ...task } 
    setTasks([...tasks, newTask]) 
  } 

  */
  return (
    <div className="container">
      {/*
      <h2>In bellow, the 'Header' component rendered!</h2>
      <Header title = {'asdasdasd'} ></Header>
      */}
      <Header2 onAdd={() => setShowTask(!showTask)} showTask={showTask} />

      {showTask && <AddTask onAdd={addTask}></AddTask>}

      {tasks.length > 0 ? (
        <Tasks tasks2={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  )
}
export default App
