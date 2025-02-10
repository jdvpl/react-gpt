import { RouterProvider } from "react-router-dom"
import { router } from "./presentation/router/router"

function ReactGPT() {
  return (
    <RouterProvider router={router}/>
  )
}

export default ReactGPT
