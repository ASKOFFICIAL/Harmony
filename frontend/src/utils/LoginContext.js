import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';

const LoginContext = createContext({
    loggedIn: null,
    setLoggedIn: () => {},
    data: null,
    setData: () => {},
    songData: null,
    setSongData: () => {},
    accessToken: null
});

export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ code, children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState({});
    const [songData, setSongData] = useState([]);
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        const handleLogin = async () => {
            await axiosInstance.post('/user/callback', { code }).then(async (res) => {
                setExpiresIn(res.data.expires_in)
                
                await axiosInstance('/user/details')
                .then((res) => {
                        setAccessToken(res.data.access_token)
                        setRefreshToken(res.data.refresh_token)
                        setData(res.data)
                        console.log(res.data)
                        setLoggedIn(true)
                    })
                    .catch(() => { window.location = '/' });
            })
            .catch((err) => { console.log(err)
                window.location = '/' });
        }

        handleLogin();
    }, [code])
    
    useEffect(() => {
        if (accessToken) window.history.pushState({}, null, "/userhome")
    }, [loggedIn])

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn, data, setData, accessToken, songData, setSongData }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;