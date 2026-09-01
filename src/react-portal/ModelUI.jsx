import React, { useState } from 'react'
import Model from './Model'


const Wrapper_Button_Styles = {
    position: 'relative',
    zIndex: 1
}

const Other_Content_Styles = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
}

const ModelUI = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div style={Wrapper_Button_Styles}>

                <button onClick={() => setIsOpen(true)}>Open Model</button>
                <Model open={isOpen} onClose={() => setIsOpen(false)}>
                    Fancy Model
                </Model>
            </div>


            <div style={Other_Content_Styles}>Other Content</div>
        </>
    )
}

export default ModelUI