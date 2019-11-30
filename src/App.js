import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor (){
    super();
    this.state = {
      result : 0,
      numbers : [0,1,2,3,4,5,6,7,8,9],
      operators : ["+","-","*","/","=","C"],
      equation:''

    }
  }
  NumberClick = (number) => {
    this.setState({equation:this.state.equation+ number})
  }
  OperatorClick = (operator) => {
    this.setState({equation:this.state.equation+ operator})


    if(operator === "="){


    }else if(operator === "C") {
      this.setState({result:0})
      this.setState({equation:''})


    } else{
      this.setState({equation:this.state.equation+ operator})


    }
  }

  render() {

    return (
      <div className="App">
      <h1> Calculator App </h1>
      <div className="num">
        {this.state.numbers.map((number,index)=>{

          return (
            <button onClick={()=>this.NumberClick(number)} key={index}> {number} </button>
          )
        })}
      </div>
      <div>
     {this.state.operators.map((operator,index)=>{
       return (
         <button key={index} onClick={()=>this.OperatorClick(operator)}>{operator} </button>
       )
     })}
      </div>
      <div>
        <p>The Resault Is : {this.state.result}</p>
        <p>The Equation Is : {this.state.equation}</p>

      </div>
    </div>

    );
  }
}

export default App;
