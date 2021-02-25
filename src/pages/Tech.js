import React from 'react'
import { StyledSection, InfoText, SmallHeader } from '../Style'
import { BackToStart } from '../components/BackToStart'

export const Tech = () => {

  return (
    <StyledSection>
      <BackToStart />
      <SmallHeader>Frontend</SmallHeader>
      <InfoText>
        JavaScript ES6<br />
        JSX<br />
        React<br />
        React Native<br />
        Redux< br/>
        CSS<br />
        Styled Components<br />
        HTML
      </InfoText>
      <SmallHeader>Backend</SmallHeader>
      <InfoText>
        Node.js<br />
        Express<br />
        Mongoose<br />
        REST<br />
      </InfoText>
      <SmallHeader>Tools</SmallHeader>
      <InfoText>
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
      </InfoText>
      </StyledSection>
  )
}
