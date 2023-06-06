import React from 'react'
import Header from './Header'
import HomeCSS from "./Home.module.css"
import {Flex} from "./components/Flex.styled.js"
import {HomeStyle} from "./components/Home.styled.js"


const Home = () => {
  return (
    <Flex justify="center" align="center">
      <HomeStyle>
          <h1 >Welcome to your own very home</h1>

      </HomeStyle>    
          
    </Flex>
  )
}

export default Home