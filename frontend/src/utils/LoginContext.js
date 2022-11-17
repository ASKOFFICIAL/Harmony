import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';

const LoginContext = createContext({
    loggedIn: null,
    setLoggedIn: () => {},
    data: null,
    setData: () => {},
    currentSong: null,
    setCurrentSong: () => {},
    accessToken: null
});

export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ code, children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState({});
    const [currentSong, setCurrentSong] = useState();
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        const handleLogin = async () => {
            await axiosInstance.post('/user/callback', { code }).then(async (res) => {
                setAccessToken(res.data.access_token)
                setRefreshToken(res.data.refresh_token)
                setExpiresIn(res.data.expires_in)

                await axiosInstance('/user/details')
                    .then((res) => {
                        setData(res.data)
                        setLoggedIn(true)
                    })
                    .catch(() => { window.location = '/' });
            })
            .catch(() => { window.location = '/' });
        }

        handleLogin();
    }, [code])

    useEffect(() => {
        window.history.pushState({}, null, "/userhome")
    }, [loggedIn])

    // useEffect(() => {
    //     if (!refreshToken || !expiresIn) return;

    //     const timeout = setTimeout(async () => {
    //         await axiosInstance.post('/user/refresh').then(async (res) => {
    //             console.log(res.data.access_token)
    //             setAccessToken(res.data.access_token)
    //             // setExpiresIn(res.data.expires_in)
    //             setExpiresIn(65)
    //         })
    //     }, (expiresIn - 60) * 1000)

    //     return () => clearTimeout(timeout)
    // }, [refreshToken, expiresIn])

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn, data, setData, accessToken }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;