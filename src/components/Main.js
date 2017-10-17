import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Music from './Music'
import Weather from './Weather'
import Beauty from './Beauty'

const divStyle = {
  width: '80%',
  margin: 20,
  textAlign: 'center'
}

const Main = () => (
    <div className="mainClass"  style={divStyle} >
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/music' component={Music}/>
        <Route path='/weather' component={Weather}/>
        <Route path='/Beauty' component={Beauty}/>
      </Switch>
    </div>
)

export default Main