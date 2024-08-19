import { Component } from "react";
import Element2 from './Element2.js';
import './main.css';

class element extends Component {
  render () {
    let box = [];
    for (let i=0; i<4; i++) {
      box.push(<Element2/>);
    }
    return (
      <div className='box_3rd'>
        <h1>Element3</h1>
        <hr/>
        {box}
      </div>
    );
  }
}

export default element;