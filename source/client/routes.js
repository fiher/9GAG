import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import AllMemes from './components/AllMemes'
import AllUsers from './components/AllUsers'
import MemeInfo from './components/MemeInfo'
import UserInfo from './components/UserInfo'
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'
import CreateMeme from './components/CreateMeme'
import authorize from './utilities/Authorize'

export default (
  <Route component={ App }>
    <Route exact path='/' component={Home}/>
    <Route path='/user/profile/:userId' component={authorize(UserInfo)}/>
    <Route path='/user/register' component={UserRegister}/>
    <Route path='/user/login' component={UserLogin}/>
    <Route path='/memes/all' component={authorize(AllMemes)}/>
    <Route path='/memes/:id' component={authorize(MemeInfo)}/>
    <Route path='/users/all' component={authorize(AllUsers)}/>
    <Route path='/createMeme' component={authorize(CreateMeme)}/>
  </Route>
)