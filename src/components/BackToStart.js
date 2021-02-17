import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const BackToStart = () =>  <BackArrow to={'/'}>🠔 back</BackArrow>

const BackArrow = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: black;
  font-family: 'Paprika', cursive;
  justify-content: flex-end;
  margin: 5% 0 0 0;
`