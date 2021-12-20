import React from 'react'
import Body from './body/Body'
import Sidebar from './sidebar/Sidebar'
import './player.css'
import Footer from './footer/Footer'

const Player = ({ spotify }) => {
    return (
        <div className="player">
            
            <div className="player_body">
                <Sidebar/>
                <Body/>
            </div>
            


            {/* footer */}
            <Footer/>

        </div>
    )
}

export default Player
