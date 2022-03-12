import React from "react";


class RadioButton extends React.Component {

	constructor(props) {
		super(props)
		this.state = {items: this.props.items.map(item => ({item, chosen: false, hovered: false, moused: false}))}
		this.handleClick = this.handleClick.bind(this)
		this.handleMouseDown = this.handleMouseDown.bind(this)
		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)
	}
	handleClick(e, index) {
		e.preventDefault()
		
		return this.setState(state => ({
			items: state.items.map(({ ...rest }, sIndex) => ({...rest, moused: false, chosen: index === sIndex ? true : false}))
		}))
	}
	handleMouseDown(e, index) {
		e.preventDefault()
		
		return this.setState(state => ({
			items: state.items.map(({ ...rest }, sIndex) => ({...rest, moused: index === sIndex ? true : false}))
		}))
	}
	handleMouseEnter(e, index) {
		e.preventDefault()
		
		return this.setState(state => ({
			items: state.items.map(({ ...rest }, sIndex) => ({...rest, hovered: index === sIndex ? true : false }))
		}))
	}
	handleMouseLeave(e, index) {
		e.preventDefault()
		
		return this.setState(state => ({
			items: state.items.map(({ hovered, ...rest }, sIndex) => ({...rest, hovered: index === sIndex ? false : hovered }))
		}))
	}

	render() {
		
		return(
			<div id="radio-group" className="text-gray-500">
				{this.state.items.map(({ item, chosen, hovered, moused }, index) => {
					return(
						<label
						 onClick={e => this.handleClick(e, index)}
						 onMouseEnter={e => this.handleMouseEnter(e, index)}
						 onMouseLeave={e => this.handleMouseLeave(e, index)}
						 onMouseDown={e => this.handleMouseDown(e, index)}
						 className="mx-2 radio_label"
						>
							<input type="radio" value={item} name={this.props.name} checked={chosen} className="radio_button mx-1" onClick="this.style.backgroundColor = '#e00045'" />
							{item}
						</label>
					);
				})}
			</div>
		);
	}
}

export default RadioButton;
