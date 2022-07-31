import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./taskList.css";

function TaskList(props) {
    return (
        <div className="task-list">
            <h1>{props.title}</h1>
            <FontAwesomeIcon
                icon={faTrash}
                onClick={props.onDelete}
                className="trash-icon"
            />
        </div>
    );
}

export default TaskList;
