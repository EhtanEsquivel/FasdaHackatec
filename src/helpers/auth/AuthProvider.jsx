import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const nav = useNavigate()
    const [user, setUser] = useState(false)
    const isLogged = () => !!user

    useEffect(() => {
        isLoggin()
    }, [])


    const login = (userData, setError) => {
        if (users[userData.user] !== undefined) {
            if (userData.password === "123456789") {
                setUser(users[userData.user])
                localStorage.setItem("token", userData.user)
                nav('/home')
            } else (
                setError("Wrong Password")
                )
        } else {
            setError("No username")
        }
    }
    const logout = () => {
        setUser(false)
        localStorage.removeItem("token")
    }
    const isLoggin = () => {
        const token = localStorage.getItem("token")
        console.log(token);
        if (users[token] !== undefined) {
            setUser(users[token])
            nav('/home')
        }
    }


    const data = {
        user,
        isLogged,
        login,
        logout
    }
    return <AuthContext.Provider value={data} >{children}</AuthContext.Provider>
}

const users = {
    student: {
        name: "student",
        rol: "stud"
    },
}