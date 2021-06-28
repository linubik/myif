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
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="heading type1">Titre contrat / produit / univers</div>
            <div class="heading type2">Titre type de formulaire</div>
            <ol class="step-bar step-bar-6 step-bar-active-2">
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
            <div class="heading type3">Nom étape </div>
          </div>
        </div>
      </div>
    );
  }
}
