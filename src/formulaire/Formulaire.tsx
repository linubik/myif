import React, { Component } from 'react';
import { render } from 'react-dom';

interface AppProps {
  prev:any,
  next:any
}
interface AppState {
  name: string;
}

export default class Formulaire extends Component<AppProps, AppState> {
  constructor(props:AppProps) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      name: 'Formulaire',
    };
  }

  prev() {
    this.props.prev();
  }

  next() {
    this.props.next();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-10 col-center col-form-container">
            <form className="maif-form">
              <p>
                Corps du formulaire <br />À la fin du formulaire mise en place
                de la zone de validation avec action étape :
              </p>
              <div className="row action-etape">
                <div className="col-sm-12">
                  <a className="btn color-1" href="#" onClick={this.prev}>
                    Bouton 1
                  </a>
                  <a className="btn" href="#" onClick={this.next}>
                    Bouton 2
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-10 col-center">
            <p className="form-legend">* Champ obligatoire</p>
          </div>
        </div>
      </div>
    );
  }
}
