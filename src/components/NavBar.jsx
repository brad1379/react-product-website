import { NavLink, useNavigate } from "react-router-dom"

function NavBar({ isLoggedIn, logout }) {
    const navigate = useNavigate()

    function handleLogout() {
        logout();
        navigate("/")
    }

    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/admin">Admin</NavLink>
                {isLoggedIn ? (<button onClick={handleLogout}>Log out</button>) : (<NavLink to="/login">Admin Login</NavLink>)}
            </nav>
        </header>
    )
}

export default NavBar