import React, { Component } from 'react';
import {Route, Redirect,  withRouter, Switch} from 'react-router-dom';
import Home from './home';
import About from './about';
import Gallery from './gallery';
import notFound from './nomatch';
import SignIn from './sign-in';
import Checkout from './checkout';
import {Grid, Button} from 'react-bootstrap';


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
    <Grid>
      <p>
        Welcome!{" "}
        <Button bsStyle="primary"
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </Button>
      </p>
      </Grid>
    ) : (
      <Grid>You are not logged in.</Grid>
    )
);

class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Grid>
        <p>You must log in to view the page at {from.pathname}</p>
        <Button bsStyle="primary" onClick={this.login}>Log in</Button>
      </Grid>
    );
  }
}





class Routes extends Component {
		
  render() {
    return (
<div className="App">
		<AuthButton />
		<Switch>
	<Route path="/" exact component = {Home}/>
	<Route path="/about" component={About} />
	<Route path="/gallery" component = {Gallery}/>
	<Route path="/checkout" component = {Checkout} />
	<Route path="/contact" render = {
		()=>{
			return (<h1>contact us</h1>)
		}

	} />
	<PrivateRoute path="/sign-in" component = {SignIn}/>
      <Route path="/login" component={Login} />
	
	<Route component={notFound} />
	</Switch>
</div>
    );
  }
}

export default Routes;


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
