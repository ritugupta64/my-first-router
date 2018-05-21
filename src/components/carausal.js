import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import uuid from 'uuid';


class HomeCarousel extends Component {

	constructor(){
		super();
		this.state = {
		}

	}


	componentWillMount(){

		this.setState({

			sliderData:[

			{id:uuid.v4(), title:'First image', para:'This is first para', image:'https://i.imgur.com/WvDjJvL.jpg'},
			{id:uuid.v4(), title:'Second image', para:'This is Second para', image:'https://i.imgur.com/WvDjJvL.jpg'},
			{id:uuid.v4(), title:'Third image', para:'This is Third para', image:'https://i.imgur.com/WvDjJvL.jpg'}
			],

			SliderWidthHei:{width:'100%', height:'auto'}
			
		})
	}

  render() {
  	const sliderDetails = this.state.sliderData.map((sliderContent) => {

  		return(
			  <Carousel.Item key={sliderContent.id}>
			    <img style={this.state.SliderWidthHei} alt={sliderContent.title} src={sliderContent.image} />
			    <Carousel.Caption>
			      <h3>{sliderContent.title}</h3>
			      <p>{sliderContent.para}</p>
			    </Carousel.Caption>
			  </Carousel.Item>
              )

  	})
    return (<Carousel>{sliderDetails}</Carousel>);
  }
}

export default HomeCarousel;











