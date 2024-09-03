import { IconButton } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Taskcard.scss";

const TaskCard = ({title, description})=> {
    return (
        <div className="task-card-container">
            <div className="task-title-flex-container">
            <h5 className="task-title">{title}</h5>
            <IconButton aria-label="view">
                <PreviewIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="edit">
                <BorderColorIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon fontSize="small" color="error" />
            </IconButton>
            </div>
            <p className="task-description">{description}</p>
        </div>
    )
}

export default TaskCard;