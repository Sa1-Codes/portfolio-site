"use client"
import { error } from 'console';
import React, { createContext, useContext, useEffect, useState } from 'react'


type theme = "light" | "dark";

type ThemeContextProviderProps = {
    children:React.ReactNode
}

type themeContextType = {
    theme:theme,
    toggleTheme : ()=> void
}

const themeContext = createContext<themeContextType | null>(null)
function ThemeContextProvider({
    children
}:ThemeContextProviderProps) {

    const [theme , setTheme] = useState<theme>("light")

    

    const toggleTheme = () => {
        if(theme==="light"){
            setTheme("dark")
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")
        }else{
            setTheme("light")
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(()=>{
        const localTheme = window.localStorage.getItem("theme") as theme | null;
        if(localTheme){
            setTheme(localTheme)
            if(localTheme==="dark"){
                document.documentElement.classList.add("dark")
            }
        }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme("dark")
            document.documentElement.classList.add("dark")
        }
    },[theme])
    

    return <themeContext.Provider value={{
        theme,
        toggleTheme


    }}>{children}</themeContext.Provider>
}

export default ThemeContextProvider

export function useTheme(){
    const context = useContext(themeContext)
    if(!context){
        throw new Error("useTheme must be used within a themeContextProvider")
    }

    return context
}
