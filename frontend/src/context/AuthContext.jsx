import React, { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { useNavigate  } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [authToken, setAuthToken] = useState(()=> localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null)
    let [loading, setLoading] = useState(true);

    const history = useNavigate();

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({'username' : e.target.username.value, 'password' : e.target.password.value})
        })

        let data = await response.json()
        console.log(data);
        if (response.status === 200) {
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authToken', JSON.stringify(data))
            history('/')
        }else{
            alert('Something went wrong!!')
        }
    }

    let signUp = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/signup/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({'username' : e.target.username.value, 'password' : e.target.password.value, 'confirm_password' : e.target.confirm_password.value})
        })

        let data = await response.json()
        console.log(data)

        if (response.status === 200) {
            history('/login')
        }else{
            history('/login')
        }
    }

    let updateToken = async ()=> {

        if(authToken){

            let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({'refresh': authToken ? authToken.refresh : null})
            })

            let data = await response.json()
            
            if (response.status === 200){
                setAuthToken(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('authToken', JSON.stringify(data))
            }else{
                logoutUser()
            }

            if(loading){
                setLoading(false)
            }


        }

        
    }

    let logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authToken')
        history('/login')
    }

    // Data that will be thought out the application
    let contextData = {
        user:user,
        authToken: authToken,
        loginUser: loginUser,
        logoutUser : logoutUser,
        signUp, signUp
    }

    useEffect(()=> {

        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if(authToken){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authToken, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}