import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const { isLoggedin } = useAuth();
    const [loggedIn, setLoggedIn] = useState(isLoggedin);

    useEffect(() => {
        setLoggedIn(isLoggedin);
    }, [isLoggedin]);

    return (
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">ShivanshTechnical</NavLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {loggedIn ? (
                            <li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
