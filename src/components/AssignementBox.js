import React from 'react'
import kanten from '../assets/kanten.png'
import { SmallHeader, ColumnContainer, InfoText, StyledLink, RowSpaceBetween } from '../Style'
import styled from 'styled-components'


export const AssignementBox = () => {

  return (
    <ColumnContainer>
      <BiggestScreenReverse>
        <AdaptedColumn>
          <SmallHeader>Projects</SmallHeader>
          <InfoText>
            Page for Strandkanten Restaurant on Nordkoster, Sweden. Currently a sketch, waiting for input from the restaurant owner for info, menue (currently from 2017) and updated images.
          </InfoText>
          <StyledLink href='https://kanten.netlify.app/' target='blank'>Strandkanten site ➞</StyledLink> 
          <StyledLink href='https://github.com/LisaStur/kanten' target='blank'>Code on GitHub ➞</StyledLink> 
        </AdaptedColumn>
        <ImageCenter>
        <StrandkantenImage src={kanten}/>
        </ImageCenter>
      </BiggestScreenReverse>
    </ColumnContainer>
  )
}

const BiggestScreenReverse = styled(RowSpaceBetween)`
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column-reverse;
  } 
`

const AdaptedColumn = styled(ColumnContainer)`
  width: 50%;
  padding: 24px 0;

  @media (min-width: 1025px) {
    width: 100%;
  } 
`
const StrandkantenImage = styled.img`
  height: 100px;
  width: auto;
  padding-top: 56px;

  @media (min-width: 1025px) {
    width: 300px;
    height: auto;
    padding: 0;
  } 
`
const ImageCenter = styled.div`
  display: flex;

  @media (min-width: 1025px) {
    justify-content: center;
  } 
`