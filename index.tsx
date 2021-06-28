import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Formulaire from './formulaire/Formulaire';
//import styles from './style.css';
import styles from './all-formulaires.css';

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
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <Formulaire styles={styles} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
