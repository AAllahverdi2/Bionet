import ROUTES from './index.routes'
import { createBrowserRouter, RouterProvider } from 'react-router'
const router=createBrowserRouter(ROUTES)
function App() {

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
