import { useState } from 'react'

//Custom components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  return (
    <div className='Container'>
      <header>
        <h1>My task List</h1>
      </header>
      <CustomForm addTask={addTask}/>
      {tasks && <TaskList />}
    </div>
  )
}

export default App
