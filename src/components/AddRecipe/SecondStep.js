import React, { Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

const units = ['gram','kilo','cup','cloves','units','ml','litre','some']

class IngredientRow extends Component{
  render(){
    return (
      <div style={{'display':'block'}}>
          <p style={{'display':'inline-block','margin':'0 10px'}}>{this.props.qty}</p>
          <p style={{'display':'inline-block','margin':'0 10px'}}>{this.props.unit}</p>
          <p style={{'display':'inline-block','margin':'0 10px'}}>{this.props.name}</p>
      </div>
    )
  }
}

class IngredientEntry extends Component{
  state = {
    qty:0,
    unit:'',
    name:''
  }
  shouldComponentUpdate(np){
    return false;
  }
  handleName = (v) => {
    this.setState({name:v})
  }
  handleQty = (e) => {
    this.setState({qty:e.target.value})
  }
  handleUnit = (value) => {
    this.setState({unit:value})
  }
  addNewIngredient = ()=>{
    this.state.qty && this.state.unit && this.state.name && this.props.add({...this.state});
  }
  render(){
    console.log("SECOND GOT RERENDERED", this.props)
    return (
      <div>
          <TextField
            value={this.state.default}
            floatingLabelText="QTY" 
            hintText="QTY"
            type="number"
            min="0"
            style={{'width':100}}
            onChange={this.handleQty}
          />
          <AutoComplete
            value={this.state.default}
            floatingLabelText="Unit"
            filter={AutoComplete.fuzzyFilter}
            dataSource={units}
            onNewRequest={this.handleUnit}
            maxSearchResults={5}
            openOnFocus={true}
            style={{'width':100}}
          />
          <AutoComplete
            value={this.state.default}
            floatingLabelText="Ingredient"
            filter={AutoComplete.fuzzyFilter}
            dataSource={fruit}
            maxSearchResults={5}
            onNewRequest={this.handleName}
          />
          
          <RaisedButton label="Add new ingredient" onTouchTap={this.addNewIngredient}  secondary={true}/>

      </div>
    )
  }
}

export default class SecondStep extends Component {
	state ={
    ingredients:[]
	}
  addNewIngredient = (ingredient) => {
    console.log('From Parent', ingredient, this.state.ingredients)
    let n = this.state.ingredients;
    n.push(ingredient)
    console.log('New Value ',n)
    this.setState({ingredients:n});
  }

	render(){
    console.log(this.props)
		return(
			<div>
          { 
            this.state.ingredients.map((ingredient, key)=>{
              return <IngredientRow key={key}  {...ingredient} add={this.addNewIngredient} />
            })
          }
          <IngredientEntry add={this.addNewIngredient} />
          
      
      </div>
		)
	}
}