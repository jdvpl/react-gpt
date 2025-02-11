import React, { useRef, useState } from 'react'

type Props = {
  onSendMessage: (message: string) => void
  placeHolder?: string
  disableCorrections?: boolean
  acceoptFiles?: string
}

const TextMessageBoxFile = ({ onSendMessage, placeHolder, disableCorrections = false, acceoptFiles }: Props) => {

  const refFile = useRef<HTMLInputElement>(null)

  const [selectFile, setselectFile] = useState<File | null>()
  const andleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = e.currentTarget.message.value
    if (message.trim().legth === 0) return;
    onSendMessage(message)
    e.currentTarget.reset()
  }

  const openFile = () => {
    refFile.current?.click()
  }
  return (
    <form onSubmit={andleSendMessage}>
      <div className="flex flex-row items-center  h-16 w-full bg-white px-4 rounded-xl">

        <div className="mr-3">
          <button
            type='button'
            onClick={openFile}
            className='flex items-center justify-center text-gray-400 hover:text-gray-600'
          >
            <i className='fa-solid fa-paperclip'></i>
          </button>
          <input type="file" className='hidden' ref={refFile} accept={acceoptFiles}

            onChange={(e) => setselectFile(e.target.files?.item(0))}



          />
        </div>
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

        <button className="ml-4 btn-primary"
        
        disabled={!selectFile}
        >
          {
            selectFile ?
              <span className='mr-2'>{selectFile.name.substring(0,10)+'...'}</span> :
              <span className='mr-2'>Enviar</span>

          }
          <i className='fa-regular fa-paper-plane'></i>
        </button>
      </div>
    </form>
  )
}

export default TextMessageBoxFile