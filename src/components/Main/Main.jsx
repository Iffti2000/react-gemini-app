import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

 const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'> 
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult ? 
        <>
        <div className="greet">
          <p><span>Hello, Iffti</span></p>
          <p>How can I help you today?</p>
        </div>
        
        </>:
         <div className='result'>
            <div className='result-title'>
               <img src={assets.user_icon} />
               <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ?
              <div className='loader'>
                 <hr />
                 <hr />
                 <hr />
              </div>
               : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>
         </div>
        }

        
        <div className="main-bottom">
          <div className="search-box">
            <input 
            onChange={(e)=>setInput(e.target.value)} 
            value={input} type="text" 
            placeholder='Enter a prompt here'
            onKeyDown={(e) => e.key === 'Enter' && onSent()}
            />
            <div>
              {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />  : null}
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. You privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
