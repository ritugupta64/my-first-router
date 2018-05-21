import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/navigation';
import Routes from './components/routes';

class App extends Component {
  render() {
    return (
      
	<Router>
		<div>
			<Navigation />
			<Routes />
		</div>						
	</Router>
	      
    );
  }
}

export default App;
