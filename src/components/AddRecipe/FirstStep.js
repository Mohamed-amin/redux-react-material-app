import React, { Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class FirstStep extends Component {
	state ={
		title:'',
		serves:0,
		difficulty:0,
		description:'',
	}
	handleSubmit = (e, i, v) => {
		this.props.actions.updateForm({title:v})
	}
	render(){
    console.log("FIRST GOT RERENDERED")
		return(
			<div>
              <TextField
                hintText="recipe Title"
                floatingLabelText="Title"
                type="text"
                onChange={this.handlerq} 
                fullWidth={true}
              />

              <SelectField value={this.state.serves} floatingLabelText="Serves" fullWidth={true} onChange={this.handleSubmit}>
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={8} primaryText="8" />
              </SelectField>
              <SelectField value={this.state.difficulty}  floatingLabelText="Difficulty" fullWidth={true}>
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={8} primaryText="8" />
              </SelectField>
              <TextField
                floatingLabelText="Description" 
                hintText="Description"
                value={this.state.description}
                multiLine={true}
                rows={3}
                rowsMax={7}
                fullWidth={true}
              />

               <RaisedButton label="Submit" labelPosition="before" onTouchTap={this.handleSubmit} />
          </div>
		)
	}
}