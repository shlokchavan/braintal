import React from 'react'
import './Chip.css'
const Chip = ({ className, children }) => {
    return (
        <div className={'chip header ' + className}>
            {children}
        </div>
    )
}

export default Chip
