import React, { useState, useEffect } from 'react'
import Chip from '../Chip/Chip';
import './DaysOff.css'
const DaysOff = () => {
    const [days, setDays] = useState();
    useEffect(() => {
        const days = [
            {
                id: 1,
                name: 'Sunday',
                isWorking: false
            },
            {
                id: 2,
                name: 'Monday',
                isWorking: true
            },
            {
                id: 3,
                name: 'Tuesday',
                isWorking: true
            },
            {
                id: 4,
                name: 'Wednesday',
                isWorking: true
            },
            {
                id: 5,
                name: 'Thursday',
                isWorking: true
            },
            {
                id: 6,
                name: 'Friday',
                isWorking: true
            },
            {
                id: 7,
                name: 'Saturday',
                isWorking: false
            }
        ];
        setDays(days);
    }, []);
    function handleChipClicked(e, selectedDay) {
        e.preventDefault();
        const newData = days.map((day) => {
            if (selectedDay.name === day.name) {
                day.isWorking = !selectedDay.isWorking;
            }
            return day;
        })
        setDays(newData);
    }
    return (
        <div className="daysOff">
            <div className="daysOff__header">
                <div className="header">Day Off</div>
            </div>
            <div className="chip-group row">
                {
                    days &&
                    days.map((day) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a key={day.id} href="#" onClick={(e) => handleChipClicked(e, day)}>
                            <Chip className={
                                !day.isWorking ? 'bg-dark' : ''
                            }>{day.name}</Chip>
                        </a>
                    ))
                }

            </div>
        </div>
    )
}

export default DaysOff
