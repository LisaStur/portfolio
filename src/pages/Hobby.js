import React from 'react'
import { StyledSection, ExtraContainer, InfoText, SmallStyledLink, RowSpaceBetween, RowCenter } from '../Style'
import { BackToStart } from '../components/BackToStart'

export const Hobby = () => {

  return (
    <StyledSection>
      <BackToStart />
      <ExtraContainer>
      <RowSpaceBetween>
        <InfoText>Guestbook</InfoText>
        <RowCenter>       
          <SmallStyledLink href='https://github.com/LisaStur/guestbook-frontend' target='blank'>code ➞</SmallStyledLink> 
          <SmallStyledLink href='https://lisas-guestbook.netlify.app' target='blank'>site ➞</SmallStyledLink>
        </RowCenter>
      </RowSpaceBetween>
      <RowSpaceBetween>
        <InfoText>Cocktails</InfoText>
        <RowCenter>       
          <SmallStyledLink href='https://github.com/LisaStur/cocktails-app' target='blank'>code ➞</SmallStyledLink> 
          <SmallStyledLink href='https://time-for-cocktail.netlify.app' target='blank'>site ➞</SmallStyledLink>
        </RowCenter>
      </RowSpaceBetween>
      <RowSpaceBetween>
        <InfoText>Happy Thoughts</InfoText>
        <RowCenter>       
          <SmallStyledLink href='https://github.com/LisaStur/project-happy-thoughts' target='blank'>code ➞</SmallStyledLink> 
          <SmallStyledLink href='https://happy-thoughts-project-2020.netlify.app' target='blank'>site ➞</SmallStyledLink>
        </RowCenter>
      </RowSpaceBetween>
      <RowSpaceBetween>
        <InfoText>Lion Quiz</InfoText>
        <RowCenter>       
          <SmallStyledLink href='https://github.com/LisaStur/project-happy-thoughts' target='blank'>code ➞</SmallStyledLink> 
          <SmallStyledLink href='https://happy-thoughts-project-2020.netlify.app' target='blank'>site ➞</SmallStyledLink>
        </RowCenter>
      </RowSpaceBetween>
      <RowSpaceBetween>
        <InfoText>Weather</InfoText>
        <RowCenter>       
          <SmallStyledLink href='https://github.com/LisaStur/project-weather-app' target='blank'>code ➞</SmallStyledLink> 
          <SmallStyledLink href='https://weather-project-technigo.netlify.app' target='blank'>site ➞</SmallStyledLink>
        </RowCenter>
      </RowSpaceBetween>
      </ExtraContainer>
    </StyledSection>
  )
}

