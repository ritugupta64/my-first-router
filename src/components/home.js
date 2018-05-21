import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import HomeCarousel from './carausal';
import Products from './products';


class Home extends Component {
  render() {
    return (
      <Grid>
       <HomeCarousel />
       <Products />
      </Grid>
    );
  }
}

export default Home;
