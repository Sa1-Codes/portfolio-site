"use client"
import React, { useState, createContext, Children, useContext } from 'react'
import {links} from "@/lib/data"
import type { sectionName } from '@/lib/types'




type ActiveSectionContextProviderProps = {
    children:React.ReactNode
}

type ActiveSectionContextType = {
    activeSection : sectionName
    setActiveSection : React.Dispatch<React.SetStateAction<sectionName>>
    timeOfLastClick: number,
    setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>
}

export const activeSectionContext = createContext<ActiveSectionContextType | null>(null)


function ActiveSectionContextProvider({
    children
}:ActiveSectionContextProviderProps) {
    const [activeSection , setActiveSection] = useState<sectionName>("Home")
    const [timeOfLastClick , setTimeOfLastClick] = useState(0)


    return ( 
        <activeSectionContext.Provider value={
            {
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick
            }
        }>{children}</activeSectionContext.Provider>
    )
}



export function useActiveSectionContext(){
    const context = useContext(activeSectionContext)

    if(context === null){
        throw new Error("useActiveSectionContext must be within activeSectionContextProvider")
    }

    return context;
}


export default ActiveSectionContextProvider