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
      name: 'React'
    };
  }

  render() {
    return (
      <div style={formulaireStyle}>
        <Header />
        <Formulaire />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
