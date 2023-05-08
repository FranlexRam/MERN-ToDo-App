import { useState } from 'react'
import PropTypes from 'prop-types';

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
      {tasks && <TaskList tasks={tasks} />}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  };

export default App
