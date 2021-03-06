import React, { Component } from 'react'
import Link from 'next/link'
import { cx, css } from 'emotion'
import Truncate from 'react-truncate'
import { 
	Row, 
	Col,
	Avatar,
	Icon,
	Carousel,
	Button
} from 'antd'
import Container from './Container'
import { ImageCover, SliderPrimaryItem, SliderThumbItem } from './Components'
import image from '../static/images/image-slider.png'

class Slideshow extends Component {
	constructor(props) {
		super(props)
		this.state ={
			slide1: null,
			slider2: null
		}
		this.slider1 = React.createRef()
		this.slider2 = React.createRef()
	}

	componentDidMount() {
		this.setState({
			slider1: this.slider1.current,
			slider2: this.slider2.current
		})
	}

	render() {
		
		return (
			<div className={css`
				border-bottom: 1px solid #ddd;
				`}>
				<Carousel className="slider-primary" asNavFor={this.state.slider2} ref={this.slider1} 
					dots={false}
				>
					<SliderPrimaryItem image={image}/>
					<SliderPrimaryItem image={image}/>
					<SliderPrimaryItem image={image}/>
					<SliderPrimaryItem image={image}/>
					<SliderPrimaryItem image={image}/>
				</Carousel>
				<Carousel className={cx('slider-thumb', css`
					padding-top: 7px;
					padding-bottom: 7px;
					`)} asNavFor={this.state.slider1} ref={this.slider2} 
					slidesToShow={4}
					centerMode={true}
					dots={false}
			        swipeToSlide={true}
			        focusOnSelect={true}>
					<SliderThumbItem image={image}/>
					<SliderThumbItem image={image}/>
					<SliderThumbItem image={image}/>
					<SliderThumbItem image={image}/>
					<SliderThumbItem image={image}/>
				</Carousel>
			</div>
		)
	}
}

export default Slideshow