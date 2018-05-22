import React, { Component } from 'react';
// import logo from './logo.svg';
import './assets/sass/App.scss';
import './assets/sass/index.scss';
// import { Button , Alert } from 'reactstrap';
// import Button from 'material-ui/Button';
import Root from './components/Root';
import Home from './components/Home';
import About from './components/About';
import { Route, BrowserRouter } from 'react-router-dom';
class App extends Component {

  render() {
    return (
       <BrowserRouter>
         <Root>
            <Route exact path = {'/'} component = { Home }></Route>
            <Route strict path = {'/about'} component = { About }></Route>
        </Root>
       </BrowserRouter>
       );
  }
}

export default App;

