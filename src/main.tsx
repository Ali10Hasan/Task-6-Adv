import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/BlogDetails'
import Newsletter from './pages/Newsletter'
import Blog from './pages/Blog'
import { Provider } from 'react-redux'
import store from './Store'
import BlogDetails from './pages/BlogDetails'
const routes=createBrowserRouter([{
    element:<App/>,
    path:"/",
    children:[
      {
        element:<Blog/>,
        path:"",
      },
      {
            element:<BlogDetails/>,
            path:"blog-details/:id",   
      },
      {
        element:<Projects/>,
        path:"projects",
      },
      {
        element:<Newsletter/>,
        path:"newsletter",
      }
    ]   
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>,
)
