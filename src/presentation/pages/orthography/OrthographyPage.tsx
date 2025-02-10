import GptMessage from "../../components/chat-bubblers/GptMessage"
import MyMessage from "../../components/chat-bubblers/MyMessage"

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-2 gap-y-2">


          <GptMessage text="Hola, puedes escribir tu texto en español, y te ayudo con las correcciones"/>
          <MyMessage text="Hola mundo"/>
        </div>
      </div>
    </div>
  )
}

