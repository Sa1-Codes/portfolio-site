"use client"

import { useTheme } from '@/context/themeContext'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'



function Themeswitch() {
    const {theme ,toggleTheme} = useTheme()

    return (
        <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] 
        bg-opacity-80 backdrop-blur-[0.5] border border-white border-opacity-40 
        shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15rem] active:scale-105 transition-all
        dark:bg-gray-950'
        onClick={toggleTheme}
        >
            {
                theme === "light" ? <BsSun/> : <BsMoon/>
            }
            
        </button>
    )
}

export default Themeswitch
