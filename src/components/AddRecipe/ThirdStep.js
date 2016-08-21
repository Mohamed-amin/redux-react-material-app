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
		return(
			<div>
        <input type="file" />
      </div>
		)
	}
}