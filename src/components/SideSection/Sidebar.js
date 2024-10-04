import React, { useState } from 'react'
import "./Sidebar.css";
import { assets } from '../../assets/assets';

const Sidebar = () => {

    const [collaps, setCollaps] = useState(false);
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setCollaps(prev=>!prev)} className='menu' src={assets.menu} alt="" />
        <div className="new-chat">
            <img src={assets.download} alt="" />
            {collaps?<p>New Chat</p>:null}
        </div>
        {collaps?<div className="recent">
            <p className='recent-title'>Recent</p>
            <div className="recent-entry">
                <img src={assets.chat} alt="" />
                <p>What is react...</p>
            </div>
        </div>:null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question} alt="" />
            {collaps?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.recent} alt="" />
            {collaps?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting} alt="" />
            {collaps?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
