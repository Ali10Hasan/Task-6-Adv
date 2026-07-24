import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootStateType } from '../Store'

const ThemeWatcher = () => {
    const isDarkMode = useSelector((state: RootStateType) => state.Blogs.isDarkMode)
    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[isDarkMode])
  return (
    null
  )
}

export default ThemeWatcher