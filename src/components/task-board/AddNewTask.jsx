import TextArea from "../utils/text-area/TextArea";
import TextInput from "../utils/text-input/TextInput";
import { useState } from "react";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux-store/taskSlice";
import { useNavigate } from "react-router-dom";


const AddNewTask = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTextInput = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleTextArea = (e) => {
        setTaskDescription(e.target.value);
    }

    const handleSaveBtn = () => {
        dispatch(addNewTask({
            id: Math.random(),
            title: taskTitle,
            description: taskDescription,
            status: "Open"
        }));
        navigate(-1);
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