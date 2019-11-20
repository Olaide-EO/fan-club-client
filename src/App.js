import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';
//components

import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';

//Pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';


const theme = createMuiTheme({themeFile});

let authenticated;
const token = localStorage.FBIdToken;
if(token){
 const decodedToken = jwtDecode(token);
 console.log(decodedToken);
 if(decodedToken.exp * 1000 < Date.now()){
   window.location.href = '/login';
   authenticted = false;
 } else {
   authenticated = true;
 }
}

class App extends Component {
  render() {
    return (
     <MuiThemeProvider theme={theme}>
     <div className="App">
         <Router>
           <Navbar/>
          <div className="container">
             <Switch>
               <Route exact path="/" component={home} />
               <AuthRoute exact path="/login" component={login} />
               <AuthRoute exact path="/signup" component={signup} />
             </Switch>
          </div>
         </Router>
      </div>
     </MuiThemeProvider>
    );
  }
 
}

export default App;
