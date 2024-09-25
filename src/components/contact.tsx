"use client"
import React from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submitBtn'
import toast from "react-hot-toast"


function Contact() {
    const {ref} = useSectionInView("Contact")

    

    

    return (
        <motion.section id='contact' ref = {ref}
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{
            opacity:0

        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1
        }}
        viewport={{
            once:true
        }}

        >
            
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className='underline' href="mailto:sawan.ug22@nsut.ac.in">sawan.ug22@nsut.ac.in</a> or through this form.</p>

            <form action={async (FormData)=>{

                const { error} = await sendEmail(FormData)
                if(error){
                    toast.error(error);
                    return;
                }
                toast.success("Email sent Successfully")

            }} className='mt-10 flex flex-col  dark:text-black'>
                <input name='senderEmail' className='px-4 h-14 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' type="email" required maxLength={500}  placeholder='Your email' />
                <textarea name="message" className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' id="" placeholder='Message' maxLength={5000}></textarea>
                <SubmitBtn/>
            </form>
        
        </motion.section>
    )
}

export default Contact
