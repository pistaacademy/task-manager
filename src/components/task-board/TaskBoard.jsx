import './TaskBoard.scss';
import Button from '@mui/material/Button';
import TaskCard from '../utils/task-card/Taskcard';
const TaskBoard = () => {
    return (
        <div className="taskboard-container">
            <div className="title-container">
                <h3>Task Board</h3>
                <div className='add-task-btn'>
                    <Button variant="outlined">Add Task</Button>
                </div>
            </div>
            <div className="task-stage-flex-container">
                <div className="task-stage-flex-item">
                    <h5>OPEN</h5>
                    <TaskCard title="task one" description="this is for test" />
                </div>
                <div className="task-stage-flex-item">
                    <h5>IN PROGRESS</h5>
                </div>
                <div className="task-stage-flex-item">
                    <h5>IN CERIFICATION</h5>
                </div>
                <div className="task-stage-flex-item">
                    <h5>DONE</h5>
                </div>
            </div>
        </div>
    )
}

export default TaskBoard;