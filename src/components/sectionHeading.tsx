import React from 'react'

type sectionHeadingprops = {
    children:React.ReactNode
}

function SectionHeading({
    children
}:sectionHeadingprops){
    

    return (
        <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>
    )
}

export default SectionHeading
