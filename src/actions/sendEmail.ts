"use server"

import {  getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend"
import ContactFormEmail from "@/email/contactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (FormData:FormData) =>{
    const senderEmail = FormData.get("senderEmail")
    const message = FormData.get("message")

    if(!validateString(senderEmail,500) ){
        return {error:"Email is Required || Invalid sender Email"}
    }

    if(!validateString(message,5000)){
        return {error:"message not found || message is too long"}
    }
    let data;
    try {
        data=await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "sawk8787@gmail.com",
            subject: "Message from Contact form",
            replyTo: senderEmail,
            // text: message
            react: React.createElement(ContactFormEmail,{
                message:message,
                senderEmail:senderEmail
            }),
        })
    } catch (error:unknown) {
        

        return {error:getErrorMessage(error)}
        
    }

    return {data,};
}