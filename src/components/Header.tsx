import * as React from 'react';
import './Header.css'

interface IHeaderProps {
    title: string,
    btnInitialValue: string
}


interface IHeaderState {
    title: string;
    index: number;
} 

export default class Header extends React.Component<IHeaderProps, IHeaderState> {

    //setting the default value for the state (could change his value)
    constructor(props: IHeaderProps, state: IHeaderState) {
        super(props, state);

        this.state = {
            title: this.props.title,
            index: 0
        }

        this.handleClick = this.handleClick.bind(this)

        console.log(this.state);
    }

    handleClick() {
        //change the state (the value of the button)
        //when click -> index++ and change btnValue
        
        this.setState({
            title: this.state.index % 2 === 0 ? "Changed" : this.props.title,
            index: this.state.index + 1
        })
    }
    
  public render() {
      const {btnInitialValue} = this.props;
      const {title} = this.state
      
    return (
      <div>
        <div className="header">
            <div className="header__left">
                <p className="app">App</p>
            </div>
            <div className="header__center">
                <div className="buttons">
                    <button className="myButton" onClick={this.handleClick}>{btnInitialValue}</button>
                </div>
            </div>
            <div className="header__right">
                <p className="title">{title}</p>
            </div>
        </div>
      </div>
    );
  }
}
