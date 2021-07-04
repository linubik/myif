import React, { Component } from 'react';
import { render } from 'react-dom';
import { Step } from '../Step';

interface AppProps {
  step:number,
  steps:Array<Step>
}
interface AppState {
  name: string;
}

export default class Header extends Component<AppProps, AppState> {
  constructor(props:AppProps) {
    super(props);
    this.state = {
      name: 'Header',
    };
  }

render() {
    return (
      <div className="container">
        <h1>{this.props.step}</h1><br/>
        <div className="row" >
          <div className="col-sm-12">
            <div className="heading type1">Titre contrat / produit / univers</div>
            <div className="heading type2">Titre type de formulaire</div>
            <ol className="step-bar step-bar-{this.props.steps.length} step-bar-active-{this.props.step}">
              {
                this.props.steps.map((elem,index) => {
                  return <li key={elem.id} className={index+1 == this.props.step?'active':''}>
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
