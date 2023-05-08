import React from 'react';
import { PropTypes } from 'prop-types';
//Styles
import styles from './TaskItem.module.css';

const TaskItem = ({task}) => {
    return (
        <li className={styles.task}>
            <div className={styles["task-group"]}>
                <input 
                    type="checkbox"
                    checked={task.checked}
                    name={task.name}
                    id={task.id}
                />
            </div>
        </li>
    )
}
export default TaskItem