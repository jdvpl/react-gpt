import React from 'react'

type Props = {
  onSendMessage: (message: string, option:string) => void
  placeHolder?: string
  disableCorrections?: boolean
  options:Option[]
}

interface Option{
  value:string
  label:string
}
const TextMessageBoxSelect = ({ onSendMessage, placeHolder, disableCorrections = false,options }: Props) => {
  const andleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = e.currentTarget.message.value
    const option = e.currentTarget.select.value
    if(message.trim().legth === 0) return; 
      onSendMessage(message,option)
      e.currentTarget.reset()
  }
  return (
    <form onSubmit={andleSendMessage}>
      <div className="flex flex-row items-center  h-16 w-full bg-white px-4 rounded-xl">

        <div className="flex-grow">
          <div className="flex relative w-full">
            <input
              type="text"
              autoFocus
              name='message'
              className="w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 p-4 h-10"
              placeholder={placeHolder}
              autoComplete={disableCorrections ? 'on' : 'off'}
              autoCorrect={disableCorrections ? 'on' : 'off'}
              spellCheck={disableCorrections ? true : false}
            />
            <select name="select" className='w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'>
            <option value="">Seleccion</option>
            {options.map((option,index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
            </select>
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

export default TextMessageBoxSelect