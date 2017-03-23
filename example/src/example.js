import React, { Component } from 'react';
let ReactDOM = require('react-dom');
let ReactCustomSelector = require('react-custom-selector');

class App extends Component {
	constructor(props) {
		super(props);
		this.takeValue = this.takeValue.bind(this);
		this.state ={
			selected: ''
		}
	}
	
	takeValue(selectValue){
		let self = this;
		if(selectValue &&  (selectValue == undefined || selectValue == 0)) {
			//do something
			self.setState({selected: ''});
		} else if (selectValue){
			//do somethng else
			self.setState({selected: selectValue});
		}
	}


	render () {
		let self = this;
		let arr = ['Amiee','Everett','Senaida','Genaro','Elsa'];
		let showSelected = self.state.selected ? (
				<div className="selectedContainer">
					<pre>
						<code className="selectedValue">
						{self.state.selected}
						</code>
					</pre>
				</div>
		): '';

		return (
			<div>
				<ReactCustomSelector
					options={arr}
					placeholder="Select One"
					selectValue={self.takeValue}
					className="selector"
				/>
				{showSelected}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
