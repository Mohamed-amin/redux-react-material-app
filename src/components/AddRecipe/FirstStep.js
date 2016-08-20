import React, { Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

export default class FirstStep extends Component {
	state ={
		value:1
	}
	render(){
		return(
			<div>
              <TextField
                hintText="recipe Title"
                floatingLabelText="Title"
                type="text"
                fullWidth={true}
              />

              <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Serves" fullWidth={true}>
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={8} primaryText="8" />
              </SelectField>
              <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Difficulty" fullWidth={true}>
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={8} primaryText="8" />
              </SelectField>
              <TextField
                floatingLabelText="Description" 
                hintText="Description"
                multiLine={true}
                rows={3}
                rowsMax={7}
                fullWidth={true}
              />
          </div>
		)
	}
}