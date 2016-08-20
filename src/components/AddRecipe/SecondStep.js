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

class IngredientSection extends Component{
  state = {
    name:'',
    unit:'',
    qty:1,
  }

  handleName = (v) => {
    this.setState({name:v})
  }
  handleQty = (v) => {
    this.setState({qty:Number(v)})
  }
  addNewIngredient = ()=>{

    this.state.name && this.props.add({name:this.state.name, qty:this.state.qty})
  }
  render(){
    return (
      <div>
          <TextField
            floatingLabelText="QTY" 
            hintText="QTY"
            type="number"
            value={this.props.qty}
            min="0"
            style={{'width':100}}
            value={this.state}
            onChange={this.handleName}
          />
          <AutoComplete
            value={this.props.unit}
            floatingLabelText="Unit"
            filter={AutoComplete.fuzzyFilter}
            dataSource={fruit}
            maxSearchResults={5}
            style={{'width':100}}

          />
          <AutoComplete
            value={this.props.name}
            floatingLabelText="Ingredient"
            filter={AutoComplete.fuzzyFilter}
            dataSource={fruit}
            maxSearchResults={5}
            onChange={this.handleQty}
          />
          {
            !this.props.name &&
            <RaisedButton label="Add new ingredient" onTouchTap={this.addNewIngredient}  secondary={true}/>
          }
      </div>
    )
  }
}

export default class SecondStep extends Component {
	state ={
    ingredients:[]
	}
  addNewIngredient = (ingredient) => {
    this.setState({ingredients:[...this.state.ingredients, ingredient]});
  }

	render(){
		return(
			<div>
          { 
            this.state.ingredients.map((ingredient, key)=>{
              return <IngredientSection key={key}  {...ingredient} add={this.addNewIngredient} />
            })
          }
          <IngredientSection {...{name:'', qty:1}} add={this.addNewIngredient} />
          
      
      </div>
		)
	}
}