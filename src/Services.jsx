import React from 'react'
import ServicesCSS from "./Services.module.css";

import {Flex} from "./components/Flex.styled";
import { Wrapper } from './components/Wrapper.styled';

const Services = () => {
  return (
    <section className={ServicesCSS.Services}>
      
      <Flex align="center" justify="center">
          <h1>Services We Offer</h1>

      </Flex>

      <Flex justify="space-evenly" align="center">

     
      <Wrapper>
          <Flex direction="column" row="3rem">
            
              <span>  <i className="las la-desktop" style={{ color: "red" }}></i> Web Development </span>
              <span>  <i className="lab la-android" style={{ color: "green" }}></i> Android Development </span>
              <span>  <i className="lab la-react" style={{ color: "cyan" }} ></i> Hybird App Development </span>
              <span>  <i className="las la-gamepad" style={{ color: "purple" }}></i> Game Development </span>
          

          </Flex>
        </Wrapper>

            <div className={ServicesCSS.design}>
              <span>  <i className="lab la-react"></i></span>
            </div>
      </Flex>


    </section>
  )
}

export default Services