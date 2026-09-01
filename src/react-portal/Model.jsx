import React from 'react'
import ReactDom from 'react-dom';

const Model_Styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transfrom: 'translate(-50%,-50%)',
    backgroundColor: 'green',
    padding: '50px',
    zIndex: 1000
}
const OverLay_Styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    botton: 0,
    backgroundColor: 'yellow',
    height: '100%',
    zIndex: 1000
}
const Model = ({ open, children, onClose }) => {
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div style={OverLay_Styles} />

            <div style={Model_Styles}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>

        </>,
        document.getElementById('portal')
    )
}

export default Model