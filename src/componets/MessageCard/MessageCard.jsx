import React from 'react'

const MessageCard = ({isRequUserMessage,content}) => {
  return (
    <div className={`py-2 px-2 rounded-md max-w-[50%] ${isRequUserMessage ? 'self-start bg-white' : 'self-end bg-[#d9fdd3]'}`}>
      {content}
    </div>
  )
}

export default MessageCard