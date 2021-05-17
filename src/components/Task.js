import { FaTimes } from 'react-icons/fa'

//ha nincs megadva property, akkor a defaultot rendereli
//const Task = () => {

//ha meg van adva a {task}, akkor
//const Task = ({task}) =>
const Task = (props) => {
    return (

        //div className = 'task'
        <div className={`task ${props.task.reminder ?
            'reminder' : ''}`}
            onDoubleClick={() =>
                props.onToggle(props.task.id)
            }>
            {/*<h3>My task!</h3>*/}

            {/*
            akkor pedig, így kell rendereljük 
            <h3>{task.text}</h3>
            <p>{task.day}</p>
             */}
            <h3>
                {props.task.text}
                <FaTimes style={{
                    color: 'red',
                    cursor: 'pointer'

                }} onClick={() =>
                    props.onDelete(props.task.id)} />
            </h3>
            <p>{props.task.day}</p>
        </div>
    )
}

export default Task
