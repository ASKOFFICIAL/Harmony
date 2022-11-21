import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useLogin } from '../utils/LoginContext';
import "./Navbar.css";

const Navbar = () => {
    const { loggedIn, setLoggedIn, data } = useLogin();
    const logOut = () => {
        setLoggedIn(false);
        window.location = '/';
    };

    const logIn = () => {
        axiosInstance.get("/user/login").then((res) => {
            window.location.replace(res.data);
        })
    };

    return (
        <div className="container">
            <Link to="/">
                <h1 className="logo">
                    <img
                        src="images/Harmony_logo.png"
                        alt="logo"
                        className="logo"
                        width="40"
                    />
                </h1>
            </Link>

            <nav>
                <ul>
                    {loggedIn ? (
                        <>
                            <li><Link to='/'>Home</Link></li>
                            {/* <li><Link to='/playlists'>Playlists</Link></li> */}
                            <li>
                                <img
                                    // src="/images/Harmony_logo.png"
                                    src={data.images[0].url}
                                    className="profile-pic"
                                    width="40"
                                    onClick={() => {
                                        logOut();
                                    }}
                                />
                            </li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#section2">What it is</a></li>
                            <li><a href="#section3">Who we are</a></li>
                            <li className="login_but">
                                <button
                                    className="btn btn1"
                                    onClick={() => {
                                        logIn();
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
