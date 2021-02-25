import React from 'react'
import BottomNav from '../../components/BottomNav/BottomNav';
import Header from '../../components/Header/Header';
import './Standard.css';
const Standard = ({ className, children }) => {
    return (
        <div className={'standard ' + className}>
            <Header />
            <div className="content">
                {children}
            </div>
            <BottomNav />
        </div>
    )
}

export default Standard
