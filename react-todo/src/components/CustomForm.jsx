import { useState } from 'react';

//Library imports
import { PencilSquareIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleFormSubmit = (e) => {
        e.preventeDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }
    return (
        <form className="todo" onSubmit={handleFormSubmit}>
            <div className="wrapper">
                <input
                    type="text" 
                    id="task" 
                    className="input"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Enter Task"
                />
                <label htmlFor="task" className="label">Enter Task</label>
            </div>
            <button className="btn" aria-label="Add Task" type="submit">
                <PencilSquareIcon />
            </button>
        </form>
    )
}

export default CustomForm