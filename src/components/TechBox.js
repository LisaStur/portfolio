import React from 'react'
import { SmallHeader, InfoText, ColumnContainer, BigText, RowSpaceBetween } from '../Style'
import styled from 'styled-components'

export const TechBox = () => {

  return (
    <TechContainer>
      <SmallHeader>Tech</SmallHeader>
      <RowSpaceBetween>
        <ColumnContainer>
          <TechHeader>Frontend</TechHeader>
          <InfoText>
            JavaScript ES6,
            JSX<br />
            React<br />
            React Native<br />
            Redux< br/>
            CSS<br />
            Styled Components<br />
            HTML
          </InfoText>
        </ColumnContainer>
        <ColumnContainer>
          <TechHeader>Backend</TechHeader>
          <InfoText>
            Node.js<br />
            Express<br />
            Mongoose<br />
            REST<br />
          </InfoText>
        </ColumnContainer>
        <ColumnContainer>
          <TechHeader>Tools</TechHeader>
          <InfoText>
            GitHub<br />
            API<br />
            Visual Studio Code<br />
            Postman<br />
            MongoDB<br />
            Heruko<br />
            Netlify<br />
            Cloudinary<br />
          </InfoText>
        </ColumnContainer>
      </RowSpaceBetween>
    </TechContainer>

  )
}

const TechContainer = styled(ColumnContainer)`
  margin-top: 32px;
`
const TechHeader = styled(BigText)`
  margin: 12px 0 0 0;
`