import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { sectionName } from "./types";



export function useSectionInView(sectionName:sectionName, threshold=0.5){
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext()
    
    const {ref , inView} = useInView({
        threshold
    });

    useEffect(()=>{
        if(inView && Date.now() - timeOfLastClick > 1000){
            setActiveSection(sectionName)
        }
    },[inView, setActiveSection,sectionName])

    return {
        ref
    }
}