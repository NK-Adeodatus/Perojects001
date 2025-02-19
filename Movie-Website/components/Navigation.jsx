import { NavLink } from "react-router-dom"

export default function Navigation() {
    return(
        <nav>
            <NavLink 
            to="/"
            className={({isActive}) => isActive ? "activeLink" : null}
            id="navigationLink"
            >#MovieHub</NavLink>
            <NavLink 
            to="/about"
            className={({isActive}) => isActive ? "activeLink" : null}
            id="navigationLink"
            >About</NavLink>
            <NavLink 
            to="/movies"
            className={({isActive}) => isActive ? "activeLink" : null}
            id="navigationLink"
            >Movies</NavLink>
            <NavLink 
            to="/favorites"
            className={({isActive}) => isActive ? "activeLink" : null}
            id="navigationLink"
            >Favorites</NavLink>
            <div className="input-container">
                <input type="text" id="search-input" placeholder="Search Movie"/>
                <img src="https://www.svgrepo.com/show/532555/search.svg" alt="" />
            </div>
            <NavLink to='/login'>
                <button id="login-btn">Login</button>
            </NavLink>
        </nav> 
    )
}