import React from 'react'
import Avatar from '../Avatar/Avatar'
import InputBox from '../InputBox/InputBox'
import './Header.css'
const Header = () => {
    return (
        <div className="standard__header">
            <Avatar name="John Doe" img="https://instagram.fbom36-1.fna.fbcdn.net/v/t51.2885-19/s320x320/122425265_194974195446386_3381889102029807275_n.jpg?_nc_ht=instagram.fbom36-1.fna.fbcdn.net&_nc_ohc=y5jG2lSpkOAAX9dyV7a&tp=1&oh=cafa1f5f7502990fdf9bdc1044080bfb&oe=6060EB08" />
            <InputBox className="ml-1" placeholder="Search.." />
        </div>
    )
}

export default Header
