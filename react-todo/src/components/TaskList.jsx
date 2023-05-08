/* eslint-disable react/prop-types */
// component import
import TaskItem from './TaskItem';

// styles
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b._id - a._id).map(task => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      ))
      }
    </ul>
  )
}
export default TaskList