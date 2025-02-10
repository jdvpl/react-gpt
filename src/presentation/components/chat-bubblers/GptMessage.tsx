import Markdown from 'react-markdown'

interface Props{
  text:string
}

const GptMessage = ({text}:Props) => {
  return (
    <div className='col-start-1 col-end-9 p-3 rounded-lg'>
      <div className="flex flex-row items-start" >
        <div className="flex flex-row items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0">
          F
        </div>
        <div className="relative ml-3 bg-black bg-opacity-25 pt-3 pb-3 px-4 shadow rounded-xl">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default GptMessage