import { Outlet } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar/NavBar"
import ThemeWatcher from "./Mode/ThemeWatcher"

function App() {
  const NavElement={
    list:[
    {
      path:"/",
      content:"Blog"
    },
    {
      path:"/projects",
      content:"Projects"
    },
    {
      path:"/about",
      content:"About"
    },
    {
      path:"/newsletter",
      content:"Newsletter"
    },
   
  
  ],
    modeIcon:["/sun.png","/moon.png"]
  }
  return (
  
    <div className='content dark:bg-[#090D1F]'>
        <ThemeWatcher/>
        <NavBar logo="Your Name" NavElement={NavElement} />
        <Outlet/>
    </div>
      
  
  )
}

export default App
