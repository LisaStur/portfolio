import React from 'react'
import guesthouse from '../assets/guesthouse.png'
import cocktail from '../assets/cocktail.png'
import heart from '../assets/heart.png'
import sun from '../assets/sun.png'
import { BigText, InfoText, ColumnContainer, RowContainer, SmallHeader, StyledLink, TabletImage } from '../Style'
import styled from 'styled-components'

export const ProjectBox = () => {

  return (
    <ColumnContainer>
      <NoSmallHeader>Hobby-Projects</NoSmallHeader>
      <RowWrapContainer>
        <SmallerColumn>
          <AdaptedBigText>Guestbook</AdaptedBigText>
          <RowContainer>
            <ColumnContainer>
              <InfoText>
                Fullstack project with RESTful API. Sign up and post or like messages.
              </InfoText>
              <StyledLink href='https://lisas-guestbook.netlify.app' target='blank'>Guestbook site ➞</StyledLink> 
              <StyledLink href='https://github.com/LisaStur/guestbook-frontend' target='blank'>Code on GitHub ➞</StyledLink>
            </ColumnContainer>
            <TabletImage src={guesthouse}/>
          </RowContainer>
        </SmallerColumn>
        <SmallerColumn>
          <AdaptedBigText>Cocktails</AdaptedBigText>
          <RowContainer>
            <ColumnContainer>
              <InfoText>
                Drink app created with The Cocktail DB API. Inspiration for any upcoming party!
              </InfoText>
              <StyledLink href='https://time-for-cocktail.netlify.app' target='blank'>Cocktail site ➞</StyledLink> 
              <StyledLink href='https://github.com/LisaStur/cocktails-app' target='blank'>Code on GitHub ➞</StyledLink>
            </ColumnContainer>
            <TabletImage src={cocktail}/>
          </RowContainer>
        </SmallerColumn>
        <SmallerColumn>
          <AdaptedBigText>Happy Thoughts</AdaptedBigText>
          <RowContainer>
            <ColumnContainer>
              <InfoText>
                Fullstack project for the Technigo boot camp. Post and like thoughts!
              </InfoText>
              <StyledLink href='https://happy-thoughts-project-2020.netlify.app' target='blank'>Happy Thoughts site ➞</StyledLink> 
              <StyledLink href='https://github.com/LisaStur/project-happy-thoughts' target='blank'>Code on GitHub ➞</StyledLink>
            </ColumnContainer>
            <AdjustedHeart src={heart}/>
          </RowContainer>
        </SmallerColumn>
        <SmallerColumn>
          <AdaptedBigText>Weather</AdaptedBigText>
          <RowContainer>
            <ColumnContainer>
              <InfoText>
                App using Open Weather API for current weather and forecast.
              </InfoText>
              <StyledLink href='https://weather-project-technigo.netlify.app' target='blank'>Weather site ➞</StyledLink> 
              <StyledLink href='https://github.com/LisaStur/project-weather-app' target='blank'>Code on GitHub ➞</StyledLink>
            </ColumnContainer>
            <TabletImage src={sun}/>
          </RowContainer>
        </SmallerColumn>
      </RowWrapContainer>
    </ColumnContainer>
  )
}

const RowWrapContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media (min-width: 1025px) {
    flex-flow: column nowrap;
  } 
`
const SmallerColumn = styled(ColumnContainer)`
  width: 45%;
  padding-right: 5%;

  @media (min-width: 1025px) {
    width: 100%;
    padding: 0;
  } 
`
const AdaptedBigText = styled(BigText)`
  margin: 5% 0 0 0;
`
const AdjustedHeart = styled.img`
  height: 80px;
  width: auto;
`

const NoSmallHeader = styled(SmallHeader)`
  display: flex;

  @media (min-width: 1025px) {
    display: none;
  } 
`