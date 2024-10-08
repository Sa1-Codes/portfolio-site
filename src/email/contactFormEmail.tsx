import React from 'react'

import {
    
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components"

import { Tailwind } from '@react-email/tailwind'


type ContactFormEmailProps = {
    message:string
    senderEmail:string
}
 
function ContactFormEmail({
    message,
    senderEmail
}:ContactFormEmailProps) {

    return (
        <Head>
            <Preview>
                New Message from Portfolio site
            </Preview>
            <Tailwind>
                <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>You recieved the following message through contact form</Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text>The sender&apos;s email is: {senderEmail}</Text>
                    </Section>
                </Container>
                </Body>
            </Tailwind>
        </Head>
    )
}

export default ContactFormEmail
