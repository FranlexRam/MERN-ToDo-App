import { useEffect, useState } from 'react'
// import PropTypes from 'prop-types';
import { getAllToDo } from './utils/handleApi';

//Custom components
import CustomForm from './components/CustomForm';
import EditForm from './components/EditForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() =>{
    getAllToDo(setTasks)
  }, [])

  // const addTask = (task) => {
  //   setTasks(prevState => [...prevState, task])
  // }

  const deleteTask = (_id) => {
    setTasks(prevState => prevState.filter(t => t._id !== _id));
  }

  const toggleTask = (_id) => {
    setTasks(prevState => prevState.map(t => (
      t._id === _id ? {...t, checked: !t.checked} : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t._id === task._id ? {...t, name: task.name} : t
    )))
    // TODO: close the edit mode
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true)
  }

  return (
    <div className='Container'>
      <header>
        <h1>My task List</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
          />
        )
      }
      <CustomForm setTasks={setTasks}/>
      {tasks && (
        <TaskList 
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

// App.propTypes = {
//   children: PropTypes.node.isRequired,
//   };

export default App
