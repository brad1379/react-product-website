import { NavLink, useNavigate } from "react-router-dom"

function NavBar({ isLoggedIn, logout }) {
    const navigate = useNavigate()

    function handleLogout() {
        logout();
        navigate("/")
    }

    return (
        <header className="nav">
            <nav className="nav__inner">
                <NavLink to="/" end className="nav__brand">Home Appliance Depot</NavLink>
                <div className="nav__links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    {isLoggedIn && <NavLink to="/admin">Admin</NavLink>}
                    {isLoggedIn ? (<button className="nav__logout" onClick={handleLogout}>Log out</button>) : (<NavLink to="/login">Admin Login</NavLink>)}
                </div>
            </nav>
        </header>
    )
}

export default NavBar