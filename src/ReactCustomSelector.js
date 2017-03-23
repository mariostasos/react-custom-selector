'use strict';

import React, { Component } from 'react';

class ReactCustomSelector extends Component {
	constructor(props) {
		super(props);
		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			selected: null
		}
	}

	handleSelect(e) {
		let self = this;
		let selector_val = e.target.value;
		self.setState({selected: selector_val});

		if(self.props.selectValue){
			self.props.selectValue(selector_val);
		}
	}

	render (){
		let self = this;

		let classes = ['react-custom-selector', self.props.customClass];
		classes = classes.join(' ');
		let name = self.props.name ? self.props.name : null;
		let placeholder = self.props.placeholder ? self.props.placeholder : null;
		let noContentMsg = self.props.noContentMsg ? self.props.noContentMsg : 'No Content Found';
		let options = self.props.options;
		
		if(!Array.isArray(options)) {
			console.log('Please provide an array');
			return;
		}
		
		let dataMapped = options.map(function(item, index){
			return(<option key={item || index} value={item || index}>{item || index}</option>);
		});

		if(options.length > 0 ) {
			return(
					<select name={name} value={self.state.selected ? self.state.selected : ''} ref="react-custom-selector" className={classes} onChange={self.handleSelect} {...self.props}>
						<option key="0" value="0">{placeholder}</option>
						{dataMapped ? dataMapped : null}
					</select>
			);
		} else {
			return (
				<div>
					{noContentMsg}
				</div>
			);
		}
		
	}
}

export default ReactCustomSelector;
