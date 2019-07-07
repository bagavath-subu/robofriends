import './App.css';
import Card from './components/Card';
import Search from './components/Search';
import {Names} from './components/Names';
import React, { Component } from 'react';

class App extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     robots:Names,
  //     searchfield: ''
  //   };
  // }
  // filteredRobots = this.state.robots.filter(robot =>{
  //   return robot.toLowerCase().includes(this.state.searchfield.toLowerCase());
  // })

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

 
  
  render() {
    let cards=[];
    for(var i=0;i<Names.length;i++){
   cards.push(<Card id={Names[i]} />);
    }
    return (
      <div>
        <h1 style={{"margin-top":"0px","margin-bottom":"0px"}}>Robot Friends</h1>
      <Search searchChange={this.onSearchChange}/>
      <div className="App-header">
      {cards}
      </div>
      <div className="add">
      <input placeholder="Enter Name" type="text" className="br3"/>
      <button className="ma2 mh4 f6 link dim br2 ph3 pv2 mb2 dib white bg-black ">ADD</button>
      </div>
      </div>
  );
  }
}
export default App;
