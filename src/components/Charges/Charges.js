import React, { useState, useEffect } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import InputBox from '../InputBox/InputBox'
import './Charges.css'
const Charges = () => {
    const [duration, setDuration] = useState();

    useEffect(() => {
        const timeOptions = [
            {
                id: 1,
                name: '15 min',
                value: 15
            },
            {
                id: 2,
                name: '30 min',
                value: 30
            },
            {
                id: 3,
                name: '45 min',
                value: 45
            },
            {
                id: 4,
                name: '60 min',
                value: 60
            },
        ];
        setDuration(timeOptions);
    }, []);
    return (
        <div className="charges">
            <div className="charges__header">
                <div className="header">Charges</div>
                <div>➕ Add New</div>
            </div>

            <div className="cost-group">
                <div className="row">
                    <Dropdown options={duration} />
                    <InputBox className="ml-1" placeholder="Cost in ($)" type="number" width="100px" />
                </div>
                <div className="row">
                    <Dropdown options={duration} />
                    <InputBox className="ml-1" placeholder="Cost in ($)" type="number" width="100px" />
                    <span className="close-icon">❌</span>
                </div>
            </div>
        </div>
    )
}

export default Charges
