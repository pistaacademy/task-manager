import Drawer from '@mui/material/Drawer';
import TextInput from "../utils/text-input/TextInput";
import TextArea from '../utils/text-area/TextArea';
import { Button } from '@mui/material';
import { useState } from 'react';

const EditTask = ({showEditTask, closeDrawer}) => {

    const [status, setStatus] = useState("")

    return (
        <Drawer open={showEditTask} onClose={() => closeDrawer()} PaperProps={{ sx: {width: 400, padding: "1rem" }}}>
            <h3>Edit Task</h3>
            <TextInput label="Task Title" />
            <TextArea label="Task Desc" />

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Status"
                    onChange={statusHandler}
                >
                <MenuItem value={10}>Open</MenuItem>
                <MenuItem value={20}>Done</MenuItem>
                <MenuItem value={30}>Pending</MenuItem>
                </Select>
                </FormControl>
            </Box>


            <div>
                <Button sx={{ marginRight: ".5rem"}} variant="contained">Update</Button>
                <Button  onClick={() => closeDrawer()} variant='outlined'>Cancel</Button>
            </div>
        </Drawer>
    )
}

export default EditTask;