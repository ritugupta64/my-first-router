import React from 'react';
import {Jumbotron, Grid} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const notFound = () => (
  <Grid>
  <Jumbotron>
  <h1>404 Error!!!</h1>
  <p>
    This is a simple 404 error page, having said that page not found. Please Go to Home page  
  </p>
  <p>
    <Link bsStyle="primary" to="/">Home Page</Link>
  </p>
</Jumbotron>
</Grid>
);

export default notFound;