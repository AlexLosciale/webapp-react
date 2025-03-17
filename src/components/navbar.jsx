import { NavLink } from "react-router-dom";

const navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/film">FILM</NavLink>
                    </li>
                </ul>
                <h1>NETFLIX</h1>
            </div>
        </nav>
    );
};

export default navbar;