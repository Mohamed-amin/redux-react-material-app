import React, { Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ThirdStep extends Component {
	state ={
		value:1
	}
	render(){
    console.log("THIRD GOT RERENDERED")

		return(
			<div>
          <RaisedButton label="Choose file" labelPosition="before">
            <input type="file" />
          </RaisedButton>
      </div>
		)
	}
}