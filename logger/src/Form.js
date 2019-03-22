import React, { Component } from 'react';
import './style.css';

import TextInput from './TextInput';
import validate from './validate';
import Select from './Select';
import NumInput from './NumInput';


class Form extends Component {
  constructor() {
    super();

    this.state = {
      formIsValid: false,
      formControls: {

        project: {
          value: '',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: '', displayValue: 'Please Select' },
            { value: 'work', displayValue: 'Work' },
            { value: 'personal', displayValue: 'Personal' }
          ]
        },
        description: {
          value: '',
          placeholder: 'Please describe',
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        minutes: {
          value: '',
          placeholder: 'How long does it take?',
          valid: false,
          validationRules: {
            isRequired: true
          },
          touched: false
        },
      },

      personalCard: [],
      workCard: [],

    }
    this.handleKeypress = this.handleKeypress.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  // handleAddPorject(){
  //   if(this.state.formControls.project.options=="work"){
  //     this.state.workCard.push(this.state.formControls.description.value && this.state.formControls.minutes.value)
  //   }
  //   this.state.personalCard.push(this.state.formControls.description.value && this.state.formControls.minutes.value)
  // }


  changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });

  }


  formSubmitHandler = () => {
    // e.preventDefault();
    if (this.state.formControls.project.value === "work") {
      this.state.workCard.push(`${this.state.formControls.minutes.value}` + " minutes: " + `${this.state.formControls.description.value} `)
    } else {
      this.state.personalCard.push(`${this.state.formControls.minutes.value}` + " minutes: " + `${this.state.formControls.description.value} `)
    }

    this.setState({
      formControls: {

        project: {
          value: '',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: '', displayValue: 'Please Select' },
            { value: 'work', displayValue: 'Work' },
            { value: 'personal', displayValue: 'Personal' }
          ]
        },
        description: {
          value: '',
          placeholder: 'Please describe',
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        minutes: {
          value: '',
          placeholder: 'How long does it take?',
          valid: false,
          validationRules: {
            isRequired: true
          },
          touched: false
        },
      }

    })
    console.log(this.state.workCard);
    console.log(this.state.personalCard);
  }

  handleBlur(e) {
    if (e.currentTarget.value === '0') e.currentTarget.value = '1'
  }

  handleKeypress(e) {
    const characterCode = e.key
    if (characterCode === 'Backspace') return

    const characterNumber = Number(characterCode)
    if (characterNumber >= 0 && characterNumber <= 9) {
      if (e.currentTarget.value && e.currentTarget.value.length) {
        return
      } else if (characterNumber === 0) {
        e.preventDefault()
      }
    } else {
      e.preventDefault()
    }
  }


  render() {
    let { personalCard, workCard } = this.state
    return (
      <div className="App">
        <h1 className="title">Work Logger</h1>
        <label>Project:</label>
        <Select name="project"
          value={this.state.formControls.project.value}
          onChange={this.changeHandler}
          options={this.state.formControls.project.options}
          touched={this.state.formControls.project.touched}
          valid={this.state.formControls.project.valid}
        />
        <label>Description:</label>
        <TextInput name="description"
          placeholder={this.state.formControls.description.placeholder}
          value={this.state.formControls.description.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.description.touched}
          valid={this.state.formControls.description.valid}
        />
        <label>Minutes:</label>
        <NumInput name="minutes"
          placeholder={this.state.formControls.minutes.placeholder}
          value={this.state.formControls.minutes.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.minutes.touched}
          valid={this.state.formControls.minutes.valid}
          onKeyDown={this.handleKeypress}
          onBlur={this.handleBlur}
          min='1'
          step='1'
        />

        <button onClick={this.formSubmitHandler}
          disabled={!this.state.formIsValid}
        >
          Submit
          </button>
        <hr />
        <div className="persoanl-body">
          <h3>Personal</h3>
          {personalCard.map((personal) => {
            return <p>{personal}</p>
          })}
        </div>

        <div className="work-body">
          <h3>Work</h3>
          {workCard.map((work) => {
            return <p>{work}</p>
          })}
        </div>
      </div>
    );

  }
}

export default Form;