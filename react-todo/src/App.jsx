import { useEffect, useState } from 'react'
// import PropTypes from 'prop-types';
import { getAllToDo } from './utils/handleApi';

//Custom components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() =>{
    getAllToDo(setTasks)
  }, [])

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  return (
    <div className='Container'>
      <header>
        <h1>My task List</h1>
      </header>
      <CustomForm setTasks={setTasks}/>
      {tasks && <TaskList tasks={tasks} />}
    </div>
  )
}

// App.propTypes = {
//   children: PropTypes.node.isRequired,
//   };

export default App
