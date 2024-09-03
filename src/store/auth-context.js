import { createContext, useCallback, useEffect, useState } from "react";

let timeout;

const AuthContext = createContext({
    token: null,
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

const calculateRemainningTime = (expirationTime) => {
    const currentTime = new Date().getTime();

    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainningDuration = adjExpirationTime - currentTime;

    return remainningDuration;
}

const retriveToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpiration = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainningTime(storedExpiration);

    if(remainingTime <= 5000){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const AuthContextProvider = (props) => {
    const tokenData = retriveToken();

    let initialToken;

    if(tokenData){
        initialToken = tokenData.token;
    }
    
    const [token, setToken] = useState(initialToken);

    const userIsLoggedin = !!token;

    const LogoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if(timeout){
            clearTimeout(timeout);
        }
    }, []);

    const loginHandler = (token, expireTime) => {
        setToken(token);

        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expireTime);

        const remainingTime = calculateRemainningTime(expireTime);

        timeout = setTimeout(LogoutHandler, remainingTime);
    }

    useEffect(() => {
        if(tokenData){
            console.log(tokenData.duration);
            timeout = setTimeout(LogoutHandler, tokenData.duration);
        }
    }, [tokenData,LogoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedin,
        login: loginHandler,
        logout: LogoutHandler
    }
    
    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;