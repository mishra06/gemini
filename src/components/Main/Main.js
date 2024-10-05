import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import "./Main.css"
import { Context } from '../../context/Context'

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.coding_bot} alt="" />
      </div>
      <div className="main-container">

        {!showResult?
        <>
          <div className="greet">
            <p><span>Hello, Dev...</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.cmps} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.chat} alt="" />
            </div>
            <div className="card">
                <p>Tell me about React js and React native</p>
                <img src={assets.fregnent} alt="" />
            </div>
        </div>
        </>:
        <div className='result'>
            <div className="result-title">
              <img src={assets.bot} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini} alt="gemini_icon" />
              {loading?
              <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
              </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
              
            </div>
        </div> }


        

        <div className='main-bottom'>
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter prompt....' />
            <div>
              <img src={assets.img} alt="" />
              <img src={assets.mic} alt="" />
              {input?<img onClick={()=>onSent()} src={assets.serch} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
