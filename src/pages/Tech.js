import React from 'react'
import styled from 'styled-components'
import { BackToStart } from '../components/BackToStart'

export const Tech = () => {

  return (
    <TechContainer>
      <BackToStart />
      <TechHeader>Frontend</TechHeader>
      <TechInfo>
        JavaScript ES6<br />
        JSX<br />
        React<br />
        React Native<br />
        Redux< br/>
        CSS<br />
        Styled Components<br />
      </TechInfo>
      <TechHeader>Backend</TechHeader>
      <TechInfo>
        Node.js<br />
        Express<br />
        Mongoose<br />
        REST<br />
      </TechInfo>
      <TechHeader>Tools</TechHeader>
      <TechInfo>
        GitHub<br />
        API<br />
        Visual Studio Code<br />
        Terminal<br />
        Postman<br />
        MongoDB<br />
        Heruko<br />
        Netlify<br />
        Cloudinary<br />
        Mob- &amp; Pair Programming <br />
      </TechInfo>
    </TechContainer>
  )
}

const TechContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgb(249,228,183, 0.3), rgb(249,228,183, 1));
  padding:  0 5%;
  margin: 25% 5% 5% 5%;
  border-radius: 10px;
`
const TechHeader = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-block-end: 0;
  margin-block-start: 0;
`
const TechInfo = styled.p`
  font-family: 'Roboto', sans-serif;
  margin-block-start: 6px;
`