import Drawer from '@mui/material/Drawer';

const EditTask = ({showEditTask, closeDrawer}) => {
    return (
        <Drawer open={showEditTask} onClose={() => closeDrawer(false)}>
            Task Edit
        </Drawer>
    )
}

export default EditTask;