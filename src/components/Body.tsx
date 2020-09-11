import * as React from 'react';
import MyForm from './MyForm'

export interface IBodyProps {
}

export interface IBodyState {
}

export default class Body extends React.Component<IBodyProps, IBodyState> {
  constructor(props: IBodyProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <MyForm formTitle="Form Test" buttonValue="Add User" />
      </div>
    );
  }
}
