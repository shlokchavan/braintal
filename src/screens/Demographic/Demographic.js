import React from 'react'
import InputBox from '../../components/InputBox/InputBox'
import Button from '../../components/Button/Button'
import './Demographic.css'
import { Link } from 'react-router-dom'
const Demographic = () => {
    return (
        <>
            <div className="container demographic">
                <div className="demographic__pic">
                    <img src="https://instagram.fbom36-1.fna.fbcdn.net/v/t51.2885-19/s320x320/122425265_194974195446386_3381889102029807275_n.jpg?_nc_ht=instagram.fbom36-1.fna.fbcdn.net&_nc_ohc=y5jG2lSpkOAAX9dyV7a&tp=1&oh=cafa1f5f7502990fdf9bdc1044080bfb&oe=6060EB08" alt="user profile" />
                </div>
                {/* Profile Pic */}
                <h1 className="demographic__greeting">
                    Hi, John Doe!
                    </h1>
                <p className="demographic__message">
                    Few details we need!
                    </p>
                <form className="demographic__form">
                    <InputBox className="mb-1" placeholder="Where do you work?" />
                    <InputBox className="mb-1" placeholder="What is your designation?" />
                </form>
            </div>
            <div className="bottom-action">
                <Link to="/availability">
                    <Button className="tertiary">Next ➡️</ Button>
                </Link>
            </div>

        </>
    )
}

export default Demographic
