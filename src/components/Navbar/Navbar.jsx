import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="title">Task Manager</div>
            <div className="right-side-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;