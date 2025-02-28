import { TaskItemProps } from "../types/taskitemprops.tsx";
import { FiCheck } from 'react-icons/fi';
import * as React from "react";

const getHumanizedCreatedDate = (createdAt: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - createdAt.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if( diffDays === 0 ){
    const diffHours = Math.floor(diffDays / (1000 * 60 * 60));
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  }
};

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, deleteTask }) => (
  <div className="tasklist-item-container">
    <div className="tasklist-item">
      <button
        onClick={() => toggleComplete(task.id)}
        className={`tasklist-item-checkbox ${
          task.completed ? 'ticked' : 'unticked'
        }`}
      >
        {task.completed && <FiCheck className="tick" />}
      </button>
      <div className="tasklist-item-info">
                <span className={`tasklist-item-name ${task.completed ? 'complete' : 'incomplete'}`}>
                    {task.title}
                </span>
        <span className="tasklist-item-timer">{getHumanizedCreatedDate(task.createdAt)}</span>
      </div>
    </div>
    <button
      onClick={() => deleteTask(task.id)}
      className="delete-button"
    >
      Delete
    </button>
  </div>
);

export default TaskItem;