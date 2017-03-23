# react-custom-selector

Simple and customizable react select element.


## Demo & Examples

Live demo: [mariostasos.github.io/react-custom-selector](http://mariostasos.github.io/react-custom-selector/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

```
npm install react-custom-selector --save
```


## Usage
Import the module in to your project
```
let ReactSelector = require('react-custom-selector');
Or
import ReactSelector from 'react-custom-selector';
and simply use it
<ReactSelector
	options={your_array}
	placeholder={"Select One"}
/>
```

if you would like to use the selected value of react-custom-selector 
you can do so like the example below

```
this.state = {
	selected: ''
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

provide an array and your custom props
let array = ['Amiee','Everett','Senaida','Genaro','Elsa'];
you can obtain the selected value from this.state.selected

<ReactSelector
	options={array}
	placeholder={"Select One"}
	selectValue={this.takeValue}
/>
```
## Props
| name         | description                                    | type        | default          |
|--------------|------------------------------------------------|-------------|------------------|
| className    | additional css class                           | String      | ''               |
| placeholder  | select placeholder                             | React Node  |                  |
| name         | selector name                                  | String      |                  |
| noContentMsg | show a message if  there is no content to show | String      | No Content Found |
| value        | current selected option                        | Strng/Array |                  |
    

## License

MIT License

Copyright (c) 2017 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Copyright (c) 2017 Marios Ledio Taso.

