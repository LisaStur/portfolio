import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgb(249,228,183, 0), rgb(249,228,183, 1));
  padding:  0 5% 5% 5%;
  margin: 25% 5% 5% 5%;
  border-radius: 10px;

  @media (min-width: 668px) {
    margin: 15% 5% 5% 5%;
  } 

  @media (min-width: 1025px) {
    background: linear-gradient(rgb(249,228,183, 0), rgb(249,228,183, 1));
    margin: 5%;
  } 
`

export const ExtraContainer = styled.div`
  background: linear-gradient(rgb(249,228,183, 0), rgb(249,228,183, 1));
  margin-top: 2%;
  padding: 0 2%;
  border-radius: 10px;
`
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const RowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const RowSpaceEvenly = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (min-width: 1025px) {
    flex-direction: column;
    justify-content: start;
  } 
`
export const RowCenter = styled.div`
  display: flex;
  display: row;
  align-items: center;
`
export const SmallHeader = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-block-end: 0;
  margin-block-start: 0;

  @media (min-width: 668px) {
    font-size: 24px;
    font-weight: normal;
  } 
`
export const InfoText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 10px 0;
  
  @media (min-width: 1025px) {
    font-size: 18px;
  }   
`
export const BigText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;

  @media (min-width: 1025px) {
    font-size: 20px;
    font-weight: normal;
  } 
`
export const StyledLink = styled.a`
  color: black;
  font-style: italic;
  text-decoration: none;
`
export const BigStyledLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  padding: 5% 0;
  margin: 0 5%
  justify-content: space-between;
`
export const SmallStyledLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-family: 'Paprika', cursive;
  font-size: 12px;
  color: black;
  margin-left: 12px;
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  padding: 5% 0;
`
export const SmallScreen = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    display: none;
  } 
`
export const TabletImage = styled.img`
  height: 100px;
  width: auto;
`
export const BiggerScreen = styled.div`
  display: none;

  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
  } 
  @media (min-width: 1025px) {
    display: none;
  } 

`
export const BiggestScreen = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
  } 
`