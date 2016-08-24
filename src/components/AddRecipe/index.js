import React, { Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';

import FirstStep from './FirstStep.js';
import SecondStep from './SecondStep.js';
import ThirdStep from './ThirdStep.js';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';


export default class AddReceipe extends Component {
  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
  };
  updateForm = (data)=>{
    this.setState({formData:{...this.state.formData, data}});
  }
  handleChange = (event, index, value) => this.setState({value});

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <FirstStep updateForm={this.updateForm} {...this.props} />
        );
      case 1:
        return (
          <SecondStep updateForm={this.updateForm} {...this.props}/>
         
        );
      case 2:
        return (
          <ThirdStep updateForm={this.updateForm} {...this.props}/>
        );
      default:
        return;
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
            fullWidth={true} 
          />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div>
       <AppBar  
          title="BITESANDTIPS"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Recipe Description</StepLabel>
          </Step>
          <Step>
            <StepLabel>Ingredients</StepLabel>
          </Step>
          <Step>
            <StepLabel>Steps</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}
