import { IconButton } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./Taskcard.scss";
import { useState } from "react";

const TaskCard = ({title, description, id,handleDelete, openDrawer})=> {

    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    return (
        <div className="task-card-container">
            <div className="task-title-flex-container">
            <h5 className="task-title">{title}</h5>
            <IconButton aria-label="view">
                <PreviewIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="edit">
                <BorderColorIcon fontSize="small" onClick={()=> openDrawer()} />
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon onClick={()=> {setShowConfirmDelete(true)}} fontSize="small" color="error" />
            </IconButton>
            </div>
            <p className="task-description">{description}</p>

            {showConfirmDelete && <Dialog
                open={()=> {}}
                onClose={()=> {}}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm Delete ?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete the task ?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> {setShowConfirmDelete(false)}}>Cancel</Button>
                    <Button onClick={()=> {handleDelete(id)}} variant="outlined" color="error">Confirm Delete</Button>
                </DialogActions>
            </Dialog> }

        </div>
    )
}

export default TaskCard;