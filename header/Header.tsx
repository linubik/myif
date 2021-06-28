import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

interface AppProps {}
interface AppState {
  name: string;
}

export default class Header extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Header'
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="heading type1">Titre contrat / produit / univers</div>
            <div className="heading type2">Titre type de formulaire</div>
            <ol className="step-bar step-bar-6 step-bar-active-2">
              <li>
                <span>Étape 1</span>
              </li>
              <li class="active">
                <span>Étape 2</span>
              </li>
              <li>
                <span>Étape 3</span>
              </li>
              <li>
                <span>Étape 4</span>
              </li>
              <li>
                <span>Étape 5</span>
              </li>
              <li>
                <span>Étape 6</span>
              </li>
            </ol>
            <div className="heading type3">Nom étape </div>
          </div>
        </div>
      </div>
    );
  }
}
