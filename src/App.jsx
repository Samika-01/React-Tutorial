import React from 'react'
import './App.css' 
import MyRoutes from './MyRoutes'
import './Components/Layout/myStyle.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MyContextProvider } from './Hooks/MyContext';


const App = () => {
  return (
    <div>
      <MyContextProvider>

      <MyRoutes />
      </MyContextProvider>
    </div>
  )
}

export default App
