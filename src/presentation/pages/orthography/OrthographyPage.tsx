import { useState } from "react"
import TextMessageBox from "../../components/chat-boxes/TextMessageBox"
import GptMessage from "../../components/chat-bubblers/GptMessage"
import MyMessage from "../../components/chat-bubblers/MyMessage"
import TypingLoader from "../../components/loaders/TypingLoader"

interface Message {
  text: string
  isGpt: boolean
}

export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setmessages] = useState<Message[]>([])

  const handlePost = async (text: string) => {
    setIsLoading(true)
    setmessages((prev => [...prev, { text, isGpt: false }]))
    // Todo Usecase
    setIsLoading(false)
    // Todo Usecase isGTP true
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">

          <GptMessage text="Hola, puedes escribir tu texto en español, y te ayudo con las correcciones" />

          {
            messages.map((message, index) => (
              message.isGpt ? (
                <GptMessage text="Open AI" key={index} />
              ) : (
                <MyMessage text={message.text} key={index} />
              )
            ))
          }

        </div>
        {
          isLoading && <TypingLoader className="fade-in" />
        }
      </div>

      <TextMessageBox onSendMessage={handlePost} disableCorrections placeHolder="escribe lo que quiera." />

    </div>
  )
}

