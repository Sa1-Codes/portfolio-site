"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import {  useActiveSectionContext } from '@/context/activeSectionContext'
import pfp from "../../public/pfp.jpg"

function Intro() {

    const {ref} = useSectionInView("Home",0.5)
    const {setActiveSection , setTimeOfLastClick} = useActiveSectionContext()




    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                <motion.div
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{
                        type:"tween",
                        duration:0.2
                    }}
                >   
                    <Image 
                    className='h-24 w-24 rounded-full object-cover border-[0.35rem border-white shadow-xl'
                    width="192" 
                    height="192" 
                    quality="95" 
                    priority={true} 
                    alt='avatar' 
                    src={pfp}
                    />
                </motion.div>     
                    <motion.span 
                        initial={{opacity:0,scale:0}}
                        animate={{opacity:1,scale:1}}
                        transition={{
                            type:"spring",
                            stiffness:125,
                            delay:0.1,
                            duration:0.7
                        }}
                        className='text-4xl absolute right-0 bottom-0'
                    >
                        👋
                    </motion.span>
                    
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I&apos;m Sawan.</span> I&apos;m an aspiring{" "}
                <span className="font-bold">Software Engineer</span> 
                <span className="font-bold"></span>. I&apos;m quite passionate about{" "}
                <span className="italic">technology, coding</span>{" "} and always eager to {" "}
                <span className="underline"><br />learn & grow</span>.
            </motion.h1>

            <motion.div 
                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay:0.1
                }}
            >

                <Link 
                    href="#contact"
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                    onClick={()=>{
                        setActiveSection("Contact")
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
                </Link>


                <a href="/CV.pdf" download={true} className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10'>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-0.5 transition'/>
                </a>


                <a href="http://www.linkedin.com/in/sawan-004838262" target="_blank" className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'>
                    <BsLinkedin/>
                </a>


                <a href="https://github.com/Sa1-Codes" target="_blank" className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'>
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}

export default Intro
