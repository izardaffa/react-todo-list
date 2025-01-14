import { useState } from "react";
import TodoItem from "./TodoItem";
import { FaPlus } from "react-icons/fa";

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Example 1",
            completed: true
        },
        {
            id: 2,
            text: "Example 2",
            completed: false
        }
    ]);

    const [text, setText] = useState('');

    function addTask(text) {
        if (text !== '') {
            const newTask = {
                id: Date.now(),
                text,
                completed: false
            };
            
            setTasks([...tasks, newTask]);
            setText('');
        }
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            <div className="form-group">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write something..."
                />

                <button onClick={() => addTask(text)}>
                    <FaPlus />
                </button>
            </div>

            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
        </div>
    );
}

export default TodoList;