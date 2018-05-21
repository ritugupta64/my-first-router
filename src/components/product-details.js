import React, { Component } from 'react';
import {Col, Thumbnail, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



class ProductDetails extends Component {
  render() {
    return (
      <React.Fragment>
	     
		 <Col xs={6} md={4}>
        <Thumbnail src="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>{this.props.todo.title}</p>
          <p>
            <Button bsStyle="primary">more details</Button>&nbsp;
            <Link to="/checkout">checkout</Link>
          </p>
        </Thumbnail>
    </Col>
	    
      </React.Fragment>
    );
  }
}

export default ProductDetails;
