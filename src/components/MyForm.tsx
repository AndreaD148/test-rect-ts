import * as React from 'react';
import {isNullOrUndefined } from 'util';
import "./MyForm.css"

export interface IFormProps {
    formTitle?: string,
    buttonValue?: string
}

export interface IFormState {
    title: string,
    name: string,
    surname: string,
}

export default class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    this.state = {
        title: isNullOrUndefined(this.props.formTitle) ? "Normal title" : this.props.formTitle,
        name: '',
        surname: '',
    }
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    this.setState({
      name: e.target.value
    });
  }
  
  handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    this.setState({
      surname: e.target.value
    });
  }


  public render() {

    const {title, name, surname} = this.state;
      
      return (
      <div className="container">
          <div className="container__center">
            <p className="titleForm">{title}</p>
            <form id="myForm" action="" method="get">
                <div className="input-form">
                    <p className="label">Name</p>
                    <input placeholder="Name" value={name} onChange={this.handleNameChange} type="text" name="name" id="name" className="MyInput"/>
                </div>
                <div className="input-form">
                    <p className="label">Surname</p>
                    <input placeholder="Surname" value={surname} onChange={this.handleSurnameChange} type="text" name="surname" id="surname" className="MyInput"/>
                </div>
                <button type="submit" className="MyButton">{this.props.buttonValue}</button>
            </form>
          </div>
      </div>
    );
  }
}
