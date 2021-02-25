import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { StarPage } from './pages/StartPage'
import { Assignments } from './pages/Assignments'
import { Hobby } from './pages/Hobby'
import { Tech } from './pages/Tech'
import { Contact } from './pages/Contact'
import { Career } from './pages/Career'


export const Home = () => {

  return (
    <BrowserRouter>
      <HomePage>
        <Header />
        <Switch>
          <Route path='/' exact>
            <StarPage />
          </Route>
          <Route path='/assignments'>
            <Assignments />
          </Route>
          <Route path='/hobby'>
            <Hobby />
          </Route>
          <Route path='/tech'>
            <Tech />
          </Route>
          <Route path='/career'>
            <Career />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </HomePage>
    </BrowserRouter>
  )
} 

const HomePage = styled.section`
  background-image: url('assets/lang.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`