import React, { useEffect, useState } from 'react'
import './Avatar.css'
const Avatar = ({ name, img }) => {
    const [initial, setInitial] = useState('')
    useEffect(() => {
        if (!img) {
            const splittedName = name.split(' ').map((word) => word[0])
            setInitial(splittedName[0] + splittedName[1]);
        }
    }, [img, name]);
    return (
        <div className={'avatar ' + (!img ? 'avatar__initial' : '')}>
            {
                !img ?
                    initial
                    :
                    <img src={img} alt={name} />
            }
        </div>
    )
}

export default Avatar
