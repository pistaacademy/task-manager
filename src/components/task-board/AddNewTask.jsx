import TextArea from "../utils/text-area/TextArea";
import TextInput from "../utils/text-input/TextInput";
import { useState } from "react";
import Button from '@mui/material/Button';

const AddNewTask = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleTextInput = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleTextArea = (e) => {
        setTaskDescription(e.target.value);
    }

    const handleSaveBtn = () => {
        console.log("title", taskTitle);
        console.log("description", taskDescription);
    }

    return (
        <div className="add-new-task-container">
            <h4>Add New Task</h4>
            <TextInput 
                placeholder="Enter Task Title" 
                label="Task Title" 
                handleTextInput={handleTextInput}
            />
            <TextArea 
                placeholder="Enter Task Description" 
                label="Task Description" 
                handleTextArea={handleTextArea}
            />
            <Button variant="outlined" onClick={() => handleSaveBtn()} >Save</Button>
        </div>
    )
};

export default AddNewTask;