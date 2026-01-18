import React, { createContext, useState } from 'react'
import './App.css' 
import MyRoutes from './MyRoutes'
import './Components/Layout/myStyle.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MyContextProvider } from './Hooks/MyContext';
import Button from './Hooks/Button';


export const MyThemeContext = createContext()
const App = () => {
  let [theme, setTheme] = useState('Dark')

  return (
    <div>
      <MyThemeContext.Provider value={theme}>
      <MyContextProvider>
        <Button text={theme} bgcolor = {theme == 'Light' ? 'green' : ""} color={theme == 'Light' ? "green" : "pink"} onClick={()=>{
          if(theme == 'Light'){
            setTheme("Dark")
          }else{
            setTheme("Light")
          }
        }} ></Button>

      <MyRoutes />
      </MyContextProvider>
      </MyThemeContext.Provider>
    </div>
  )
}

export default App
