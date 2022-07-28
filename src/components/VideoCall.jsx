import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'

export const VideoCall = () => {
  const {name,callAccepted, myVideo, userVideo, callEnded, stream, call}=useContext(SocketContext)
  return (
    <div style={{display:"flex"}}>
    <h1>Hello</h1>
      {stream && (
          <div style={{height:"400px", width:"200px", border:"1px solid black"}}>
            <div>{name}</div>
          <video playsInline  ref={myVideo} autoPlay/>
        </div>
      )}

      {
        callAccepted && !callEnded &&(
          <div style={{height:"400px", width:"200px", border:"1px solid black"}}>
            <div>{call.name}</div>
          <video playsInline ref={userVideo} autoPlay/>
        </div>
        )
      }
   
    </div>
    
  )
}
