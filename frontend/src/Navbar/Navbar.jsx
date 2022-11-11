import { useState } from "react";
import { Link } from "react-router-dom";
import { AccountCircle, EventNote } from "@mui/icons-material";
import axiosInstance from '../utils/axiosInstance';
// import axios from 'axios';
// import randomstring from 'randomstring';

import "./Navbar.css";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logOut = () => {
        setIsLoggedIn(false);
    };
    const logIn = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="container">
            <Link to="/">
                <h1 className="logo">
                    <img
                        src="./images/Harmony_logo.png"
                        alt="logo"
                        className="logo"
                        width="40"
                    />
                </h1>
            </Link>

            <nav>
                <ul>
                    {isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/userhome">Home</Link>
                            </li>
                            <li>
                                <Link to="/playlists">Playlists</Link>
                            </li>
                            <li>
                                <AccountCircle
                                    fontSize="large"
                                    onClick={(e) => {
                                        window.location.href = "/";
                                        logOut();
                                    }}
                                />
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <a href="#section2">What it is</a>
                            </li>
                            <li>
                                <a href="#section3">Who we are</a>
                            </li>
                            <li className="login_but">
                                <button
                                    className="btn btn1"
                                    onClick={() => {
                                        // window.location.href="/userhome"
                                        // logIn()
                                        axiosInstance.get("/user/login").then((res) => console.log(res))
                                    }}
                                >
                                    Login
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
