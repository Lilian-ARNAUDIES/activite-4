import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <strong>{task.title}</strong> - {task.completed ? 'Terminée' : 'En cours'}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
