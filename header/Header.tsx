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
      name: 'Header',
      step : this.props.step,
      steps : this.props.steps
    };
  }

render() {
    return (
      <div className="container">
        <h1>{this.state.step}</h1><br/>
        <h2>{this.state.steps}</h2><br/>
        <div className="row" >
          <div className="col-sm-12">
            <div className="heading type1">Titre contrat / produit / univers</div>
            <div className="heading type2">Titre type de formulaire</div>
            <ol className="step-bar step-bar-{this.state.steps.length} step-bar-active-{this.state.step}">
              {
                this.state.steps.map((elem,index) => {
                  return <li key={elem.id} className={index+1 == this.state.step?'active':''}>
                    <span>{elem.val}</span>
                    </li>
                })
              }
            </ol>
            <div className="heading type3">Nom étape </div>
          </div>
        </div>
      </div>
    );
  }

}
