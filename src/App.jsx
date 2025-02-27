import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from '../routes/routes'
import {useMemo} from 'react'
const router = createBrowserRouter([...routes])

function App() {
    const appRouter = useMemo(()=>{
      <>
    <RouterProvider router={router}/>
    </>
    },[])
      return (
    {appRouter}
  )
}

export default App
