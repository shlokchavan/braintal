import React from 'react'
import './Dropdown.css'
const Dropdown = ({ options }) => {
    return (
        <select className="dropdown" name="custom-dropdown">
            {
                options &&
                options.map(({ name, value, id }) => (
                    <option key={id} value={value}>
                        {name}
                    </option>
                ))
            }

        </select>
    )
}

export default Dropdown
