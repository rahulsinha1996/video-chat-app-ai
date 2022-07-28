import React, { useContext, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { SocketContext } from '../SocketContext'

export const Options = ({children}) => {
  const {me, callAccepted, name, setName, callEnded, leaveCall, callUser}=useContext(SocketContext);
  const [idToCall,setIdToCall]=useState("")

  return (
    <div>
      <div>
      <input type="text" label="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <CopyToClipboard text={me}>
      <button>Copy ID</button>
      </CopyToClipboard>
      </div>
      <div>
      <input type="text" label="ID to Call" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)}/>
      {callAccepted && !callEnded ? (
        <button onClick={leaveCall}>Hang Up</button>
      ) :
      <button onClick={()=>callUser(idToCall)}>Call</button>
      }
      
      
      </div>

      
      {children}

    </div>
  )
}
