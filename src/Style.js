import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgb(249,228,183, 0.2), rgb(249,228,183, 1));
  padding:  0 5% 5% 5%;
  margin: 25% 5% 5% 5%;
  border-radius: 10px;
`
export const ExtraContainer = styled.div`
  background: linear-gradient(rgb(249,228,183, 0.4), rgb(249,228,183, 1));
  margin-top: 2%;
  padding: 0 2%;
  border-radius: 10px;
`
export const RowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`
export const InfoText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 10px 0; 
`
export const BigText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`
export const StyledLink = styled.a`
  color: black;
  padding-left: 2%;
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