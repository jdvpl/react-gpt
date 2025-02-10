import React from 'react'

type Props = {
  onSendMessage: (message: string) => void
  placeHolder?: string
  disableCorrections?: boolean
}

const TextMessageBox = ({ onSendMessage, placeHolder, disableCorrections = false }: Props) => {
  const andleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = e.currentTarget.message.value
    if(message.trim().legth === 0) return; 
      onSendMessage(message)
      e.currentTarget.reset()
  }
  return (
    <form onSubmit={andleSendMessage}>
      <div className="flex flex-row items-center  h-16 w-full bg-white px-4 rounded-xl">

        <div className="flex-grow">
          <div className="relative w-full">
            <input
              type="text"
              autoFocus
              name='message'
              className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 p-4 h-10"
              placeholder={placeHolder}
              autoComplete={disableCorrections ? 'on' : 'off'}
              autoCorrect={disableCorrections ? 'on' : 'off'}
              spellCheck={disableCorrections ? true : false}
            />
          </div>
        </div>

        <button className="ml-4 btn-primary">
          <span className='mr-2'>Enviar</span>
          <i className='fa-regular fa-paper-plane'></i>
        </button>
      </div>
    </form>
  )
}

export default TextMessageBox