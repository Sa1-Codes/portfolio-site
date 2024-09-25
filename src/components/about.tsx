"use client"
import React, { useEffect } from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'



function About() {

    const {ref} = useSectionInView("About",0.5)

    


    return (
        <motion.section 
        ref = {ref}
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
            delay:0.175
        }}
        id='about'
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'>

            <SectionHeading>About me</SectionHeading>

            <p className="mb-3">
                I&apos;m an aspiring{" "}
                <span className="font-medium">Software Engineer</span>, graduating in 2026
                with a degree in Computer Science and Engineering.{" "}I am quite passionate about
                learning and being good at what I do.<span className="font-medium"></span>{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> solving and 
                tackling challenges through logical and creative thinking. I have a solid foundation in{" "}
                <span className='font-medium'>Data Structures and Algorithms</span>{" "}
                and have a strong interest in{" "}
                <span className='underline'>web development</span>
                .{" "}
                <span className="font-medium">
                
                </span>
                 I am always looking to
                learn new technologies. I am currently looking for an{" "}
                <span className="font-medium">Internship</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                volleyball, watching movies, and go for a walk with my friends. I also enjoy{" "}
                <span className="font-medium">learning new things</span>.
                {" "}
                <span className="font-medium"></span>
                
            </p>

        </motion.section>
    )
}

export default About
