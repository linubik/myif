import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Formulaire from './formulaire/Formulaire';
import Header from './header/Header';
import formulaireStyle from './all-formulaires.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      step: 2,
      steps: [
        {id:1, val:"1"},
        {id:2, val:"2"},
        {id:3, val:"3"},
        {id:4, val:"4"},
        {id:5, val:"5"},
        {id:6, val:"6"},
        {id:7,val:"7"}
      ]
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  render() {
    const step = this.state.step;
    console.log("render "+step);
    return (
      <div style={formulaireStyle}>
        <Header step={step} steps={this.state.steps}/>
        <Formulaire next={this.next} prev={this.prev}/>
      </div>
    );
  }

  prev(e) {
    this.setState((state) => ({
      step: state.step -1
    }));
  }
  
  next(e) {
    this.setState((state) => ({
      step: state.step +1
    }));
  }
  
}

render(<App />, document.getElementById('root'));
