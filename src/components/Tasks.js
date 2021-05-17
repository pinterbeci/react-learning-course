//import { useState } from 'react'
import Task from './Task'

{/*const tasks = [
    {
        id: 1,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Shopping',
        day: 'Feb 4th at 4:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Play football',
        day: 'Feb 7th at 6:30pm',
        reminder: true,
    },
    {
        id: 4,
        text: 'Clean my room',
        day: 'Feb 9th at 6:30pm',
        reminder: false,
    },
]

*/}


//const Tasks = ({tasks2}) =>

const Tasks = (props) => {

    //useState in React
    /* 
     //ha az App.js-ben deklaráltuk, a task useState-et, akkor
     //itt már nem kell azt deklarálni
    const [tasks, setTasks] = useState(
         [
             {
                 id: 1,
                 text: 'Meeting at school',
                 day: 'Feb 6th at 1:30pm',
                 reminder: true,
             },
             {
                 id: 2,
                 text: 'Shopping',
                 day: 'Feb 4th at 4:30pm',
                 reminder: false,
             },
             {
                 id: 3,
                 text: 'Play football',
                 day: 'Feb 7th at 6:30pm',
                 reminder: true,
             },
             {
                 id: 4,
                 text: 'Clean my room',
                 day: 'Feb 9th at 6:30pm',
                 reminder: false,
             },
         ]
     )*/
    return (
        < div >

            {/*tasks2.map((task) =>
                 props.tasks2.map((task) =>
                 (<h3 key={task.id}>{task.text}</h3>))
                
                miután létrehoztuk a külön Task komponenst, 
                azután itt azt használjuk azt fel
                */}

            {/**
             * ha külön komponenst hozunk létre a (Task),
             * akkor így tudjuk azt megjeleníteni
             * 
             */}
            { props.tasks2.map((task) =>(
                <Task key = {task.id} 
                task = {task}
                onDelete = {props.onDelete}
                onToggle = {props.onToggle}
                ></Task>
            ))}


        </div >
    )
}

export default Tasks
