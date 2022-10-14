import React from 'react';
import { render } from 'react-dom';


class Person extends React.Component{
  constructor(props){
    super(props);
    this.state = { name:"this is sufiyan"};

  }
  render(){
    return <h2>{this.state.name}</h2>
  }
}
render(<Person />, document.getElementById("root"))