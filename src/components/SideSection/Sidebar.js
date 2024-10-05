import React, { useContext, useState } from 'react'
import "./Sidebar.css";
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [collaps, setCollaps] = useState(false);
    const {onSent, previousPrompt, setRecentPrompt, newChat} = useContext(Context);

    const loadPrompt = async (prompt)=>{
      setRecentPrompt(prompt);
      await onSent(prompt);
    }
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setCollaps(prev=>!prev)} className='menu' src={assets.menu} alt="" />
        <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.download} alt="" />
            {collaps?<p>New Chat</p>:null}
        </div>
        {collaps?<div className="recent">
            <p className='recent-title'>Recent</p>
            {previousPrompt.map((item,index)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} className="recent-entry">
                    <img src={assets.chat} alt="" />
                    <p>{item.slice(0,18)} ...</p>
                  </div>
                )
            })}  
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
