import {Route, Routes as AppRoutes} from "react-router-dom";
import AddNewTask from "./task-board/AddNewTask";
import TaskBoard from "./task-board/TaskBoard";


const Routes = () => {
    return (
        <AppRoutes>
            <Route path="/add-new-task" element={<AddNewTask />} />
            <Route path="/" element={<TaskBoard />} />
        </AppRoutes>
    )
}

export default Routes;