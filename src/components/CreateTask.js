import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./createTask.css";

function CreateTask() {
    const [text, setText] = useState("");
    const [task, setTask] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleAddTask = () => {
        if (text === "") {
            return alert("please enter a task");
        }
        setTask((prevState) => [...prevState, { desc: text, id: Date.now() }]);
        setText("");
    };

    const deleteTask = (id) => {
        const newTaskArray = task.filter((item) => item.id !== id);

        setTask(newTaskArray);
    };
    return (
        <div className="create-task-container">
            <div className="create-task">
                <div className="btn-container">
                    <input
                        type="text"
                        placeholder="enter a task"
                        value={text}
                        onChange={handleChange}
                    />
                    <FontAwesomeIcon
                        icon={faPlus}
                        onClick={handleAddTask}
                        className="add-icon"
                    />
                </div>
                {task.map((item) => (
                    <TaskList
                        key={item.id}
                        onDelete={() => deleteTask(item.id)}
                        title={item.desc}
                    ></TaskList>
                ))}
            </div>
        </div>
    );
}

export default CreateTask;
