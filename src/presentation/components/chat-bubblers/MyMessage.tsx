interface Props{
  text:string
}

const MyMessage = ({text}:Props) => {
  return (
    <div className='col-start-6 col-end-13 p-3 rounded-lg'>
          <div className="flex items-center justify-start flex-row-reverse" >
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
              G
            </div>
            <div className="relative mr-3 text-sm bg-indigo-700 p-2 px-4 shadow rounded-xl">
              {text}
            </div>
          </div>
        </div>
  )
}

export default MyMessage