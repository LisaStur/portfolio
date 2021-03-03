import React from 'react'
import kanten from '../assets/kanten.png'
import { SmallHeader, ColumnContainer, InfoText, StyledLink, RowSpaceBetween } from '../Style'
import styled from 'styled-components'


export const AssignementBox = () => {

  return (
    <ColumnContainer>
      <RowSpaceBetween>
        <AdaptedColumn>
          <SmallHeader>Projects</SmallHeader>
          <InfoText>
            Page for Strandkanten Restaurant on Nordkoster, Sweden. Currently a sketch, waiting for input from the restaurant owner for info, menue (currently from 2017) and updated images.
          </InfoText>
          <StyledLink href='https://kanten.netlify.app/' target='blank'>Strandkanten site ➞</StyledLink> 
          <StyledLink href='https://github.com/LisaStur/kanten' target='blank'>Code on GitHub ➞</StyledLink> 
        </AdaptedColumn>
        <StrandkantenImage src={kanten}/>
      </RowSpaceBetween>
    </ColumnContainer>
  )
}

const AdaptedColumn = styled(ColumnContainer)`
  width: 50%;
  padding: 24px 0;
`
const StrandkantenImage = styled.img`
  height: 100px;
  width: auto;
  padding-top: 56px;
`