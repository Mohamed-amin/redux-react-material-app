import React, { Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class FirstStep extends Component {
	state ={
		title:'amin',
		serves:2,
		difficulty:8,
		description:'best',
	}
	handleSubmit = (e) => {
		console.log(this.state)
		// this.props.updateForm();
	}
	render(){
		return(
			<div>
              <TextField
                hintText="recipe Title"
                floatingLabelText="Title"
                type="text"
                onChange={(e)=>{this.setState({title:e.target.value})}} 
                fullWidth={true}
                value={this.state.title}
              />

              <SelectField value={this.state.serves} onChange={(e,i,v)=>{this.setState({serves:v})}} floatingLabelText="Serves" fullWidth={true}>
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={8} primaryText="8" />
              </SelectField>
              <SelectField value={this.state.difficulty} onChange={(e,i,v)=>{this.setState({difficulty:v})}} floatingLabelText="Difficulty" fullWidth={true}>
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={8} primaryText="8" />
              </SelectField>
              <TextField
                floatingLabelText="Description" 
                hintText="Description"
                value={this.state.description}
                onChange={(e)=>{this.setState({description:e.target.value})}} 
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