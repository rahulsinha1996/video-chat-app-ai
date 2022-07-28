import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'

export const VideoCall = () => {
  const {name,callAccepted, myVideo, userVideo, callEnded, stream, call}=useContext(SocketContext)
  return (
    <div style={{display:"flex"}}>
      {stream && (
          <div>
            <div>{name}</div>
          <video playsInline muted ref={myVideo} autoPlay/>
        </div>
      )}

      {
        callAccepted && !callEnded &&(
          <div>
            <div>{call.name}</div>
          <video playsInline ref={userVideo} autoPlay/>
        </div>
        )
      }
   
    </div>
    
  )
}
