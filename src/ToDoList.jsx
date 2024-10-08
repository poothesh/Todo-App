import React, { useState } from 'react';
import './index.css';


const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
        }
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <input
                type="text"
                id="new-task"
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <h1>Click the checkbox to mark it as complete</h1>
            <ul id="todo-list">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className={task.completed ? 'completed' : ''}
                        onClick={() => toggleTaskCompletion(index)}
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(index)}
                        />
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
