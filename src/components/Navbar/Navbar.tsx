import '../Navbar/Navbar.scss'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">DevConnect</div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Login</a>
            </div>
        </nav>
    )
}

export default Navbar;