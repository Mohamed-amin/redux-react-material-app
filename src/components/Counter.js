import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 1,
    };

  }

 
  handleChange = (event, index, value) => this.setState({value});
  render() {
    return (
      <div>
        <AppBar  
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <TextField
          hintText="recipe Title"
          floatingLabelText="Title"
          type="text"
        />

        <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Serves">
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={4} primaryText="4" />
          <MenuItem value={8} primaryText="8" />
        </SelectField>
        
        <RaisedButton label="Default" />
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
