import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import About from './About.js'; 
import Index from './main.js';
import Error404 from './404.js';
import './App.css'; 
import Navbar from './Navbar';

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (<div><Navbar navClass="nav-sub main"></Navbar><Index /></div>)} />
            <Route path="/projects" render={() => (<div><Navbar navClass="nav-sub"></Navbar><Projects /></div>)} />
            <Route path="/about" render={() => (<div><Navbar navClass="nav-sub"></Navbar><About /></div>)} />
            <Route path="/portfolio">
              {<Redirect to="/" />}
            </Route>
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
