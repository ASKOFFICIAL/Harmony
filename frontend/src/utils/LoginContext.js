import { createContext, useContext, useEffect, useState } from 'react';

const LoginContext = createContext({
    loggedIn: null,
    setLoggedIn: () => {},
    data: null,
    setData: () => {}
});

export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState({});

    // useEffect(() => {
    //     // console.log("test")
    //     // setLoggedIn(loggedIn => !loggedIn);
    //     console.log(data);
    //     console.log(data.length);
    //     if (Object.keys(data).length === 0) {
    //         setIsLoading(true);
    //         setLoggedIn(false);
    //     } else {
    //         setIsLoading(false);
    //         setLoggedIn(true);
    //     }
    // }, [data])

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn, data, setData }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;