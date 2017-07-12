import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import AllMemes from './components/AllMemes'
import AllUsers from './components/AllUsers'
import MemeInfo from './components/MemeInfo'
import AuthorInfo from './components/UserInfo'
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'

export default (
  <Route component={ App }>
    <Route exact path='/' component={Home}/>
    <Route path='/user/register' component={UserRegister}/>
    <Route path='/user/login' component={UserLogin}/>
    <Route path='/memes/all' component={AllMemes}/>
    <Route path='/memes/:id' component={MemeInfo}/>
    <Route path='/users/all' component={AllUsers}/>
    <Route path='/users/profile/:id' component={AuthorInfo}/>
  </Route>
)