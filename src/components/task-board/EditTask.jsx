import Drawer from '@mui/material/Drawer';
import TextInput from "../utils/text-input/TextInput";
import TextArea from '../utils/text-area/TextArea';
import { Button } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const statusOptions = [
    { label: "Open", value: "Open"},
    { label: "In Progress", value: "InProgress"},
    { label: "In Verification", value: "InVerification"},
    { label: "Done", value: "Done"},
]

const EditTask = ({showEditTask, closeDrawer}) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [status, setStatus] = useState("");

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const handleTextInput = (e) => {
        setTaskTitle(e.target.value)
    }

    const handleTextArea = (e) => {
        setTaskDesc(e.target.value)
    }

    const updateBtnHandler = () => {
        console.log("title", taskTitle)
        console.log("desc", taskDesc)
        console.log("status", status)
    }


    return (
        <Drawer open={showEditTask} onClose={() => closeDrawer()} PaperProps={{ sx: {width: 400, padding: "1rem" }}}>
            <h3>Edit Task</h3>
            <TextInput handleTextInput={handleTextInput} label="Task Title" />
            <TextArea handleTextArea={handleTextArea} label="Task Desc" />

            <Box sx={{ minWidth: 120, width: "90%", marginBottom: "1rem" }}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Status"
                    onChange={(e) => statusHandler(e)}
                >

                {statusOptions.map((option)=> {
                    return <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                })}
                
                </Select>
                </FormControl>
            </Box>


            <div>
                <Button sx={{ marginRight: ".5rem"}} variant="contained" onClick={updateBtnHandler}>Update</Button>
                <Button  onClick={() => closeDrawer()} variant='outlined'>Cancel</Button>
            </div>
        </Drawer>
    )
}

export default EditTask;