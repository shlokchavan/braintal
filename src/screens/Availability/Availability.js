import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Charges from '../../components/Charges/Charges'
import DaysOff from '../../components/DaysOff/DaysOff'
import './Availability.css'
const Availability = () => {
    return (
        <>
            <div className="container availability">
                <div className="availability__user">
                    <img src="https://instagram.fbom36-1.fna.fbcdn.net/v/t51.2885-19/s320x320/122425265_194974195446386_3381889102029807275_n.jpg?_nc_ht=instagram.fbom36-1.fna.fbcdn.net&_nc_ohc=y5jG2lSpkOAAX9dyV7a&tp=1&oh=cafa1f5f7502990fdf9bdc1044080bfb&oe=6060EB08" alt="user profileimage" />
                    <div className="availability__user-detail">
                        <h4 className="availability__user-detail-name">John Doe</h4>
                        <p className="availability__user-detail-jobtitle">CEO of Futur</p>
                    </div>
                </div>
                <p className="availability__message">
                    This shouldn't take time, <br></br>
                        Add your availability.
                </p>

                {/* Charges Component */}
                <Charges />

                {/* Days Off Component */}
                <DaysOff />
            </div>
            <div className="bottom-action">
                <Link to="/home">
                    <Button className="tertiary">Done ✅</ Button>
                </Link>
            </div>
        </>
    )
}

export default Availability
