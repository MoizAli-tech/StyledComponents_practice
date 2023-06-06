import React from 'react'
import Header from "./Header"
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Services from "./Services"
import Contact from "./Contact"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/globalStyles.styled'

import "./App.css";
const App = () => {

  const theme={
    colors:{
      primary:"#2B547E",

    }
  }
  return (
    <div>
      <Header/>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>

      </ThemeProvider>
    
      
    </div>
  )
}

export default App