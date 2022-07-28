import React, { useContext } from 'react'

import { SocketContext } from '../SocketContext'
export const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext)
  return (
    <div>
      {call.isReceivedCall && !callAccepted && (

        <div>
          <h1>{call.name} is calling ....</h1>
          <button onClick={answerCall}>Answer Call</button>
        </div>

      )}
    </div>
  )
}
