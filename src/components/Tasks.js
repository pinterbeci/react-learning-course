import { useState } from 'react'

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


const Tasks = () => {

    const [ tasks, setTasks ] = useState(
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
    )
    return (
        <div>
            {tasks.map((task) =>
                (<h3 key={task.id}>{task.text}</h3>))}
        </div>
    )
}

export default Tasks
