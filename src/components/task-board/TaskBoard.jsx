import './TaskBoard.scss';
import Button from '@mui/material/Button';
import TaskCard from '../utils/task-card/Taskcard';
// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useFetchPosts from '../../hooks/useFetchPosts';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const TaskBoard = () => {

    const {loading, error, data} = useFetchPosts();
    const [openTaskList, setOpenTaskList] = useState([]);

    useEffect(()=> {
        if(data){
            setOpenTaskList(data.filter((obj) => obj.status === "Open"));
        }
    },[data]);

    if(loading){
        return <CircularProgress color="secondary" />
    }

    if(error){
        return <Alert severity="error">{error}</Alert>
    }

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
                    {openTaskList && openTaskList.map((task)=> {
                        return <TaskCard key={task.id} title={task.title} description={task.description} />
                    })}
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