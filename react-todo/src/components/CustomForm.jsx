import { useState } from 'react';

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'
import { addToDo } from '../utils/handleApi';
import { PencilIcon } from '@heroicons/react/24/outline';

const CustomForm = ({ setTasks }) => {
  const [task, setTask] = useState("");
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // setTasks({
    //   name: task,
    //   checked: false,
    //   _id: Date.now()
    // })
    addToDo(task, setTask, setTasks)
    // setTask("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onChange={(e) => {
            console.log(e.target.value);
            setTask(e.target.value)
          }}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label
          htmlFor="task"
          className="label"
        >Enter Task</label>
      </div>
      <button
        className="btn"
        aria-label="Add Task"
        type="submit"
        // onClick={() => addToDo(task, setTask, setTask)}
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default CustomForm