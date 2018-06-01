import React, { Component } from 'react';
import './App.css';
import Modal from './Modal.js';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      checkIns: [],
    };
  }

  onCheckIn = (item) => {
    const { checkIns } = this.state;
    const timestamp = new Date().toLocaleString();
    const newCheckIns = checkIns.concat([{...item, timestamp}]);
    this.setState({ checkIns: newCheckIns, showModal: false });

    // TODO fix the cross-origin issues!
    // axios.post('https://locahost:3000/moods', {
    //   item,
    // }).then(data => {
    //   console.log(data);
    // });
    // axios.get('https://locahost:3000/moods').then(data => {
    //   console.log(data);
    // });
  }

  getAverageMood = () => {
    const { checkIns } = this.state;
    let sum = 0;
    checkIns.forEach((checkIn) => {
       sum += checkIn.mood;
    });
    return (sum / checkIns.length).toFixed(1);
  }

  render() {
    const { checkIns } = this.state;
    return (
      <div className="App">
        <Modal
          showModal={this.state.showModal}
          onAccept={(item) => this.onCheckIn(item)}
          onCancel={() => this.setState({ showModal: false })}
        />
        <nav className="navbar is-secondary">
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-success" onClick={() => this.setState({ showModal: true })}>
                      Check in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
            {!checkIns.length && <section class="hero is-medium is-bold">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    There's nothing here yet!
                  </h1>
                  <h2 class="subtitle">
                    Check in a mood to see your results
                  </h2>
                </div>
              </div>
            </section>}
            {checkIns.length !== 0 && <section class="hero is-medium is-primary is-bold">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    You average mood is <strong>{this.getAverageMood()}</strong>
                  </h1>
                  <h2 class="subtitle">
                    You have checked in {checkIns.length} times.
                  </h2>
                </div>
              </div>
            </section>}
            {checkIns.length !== 0 && <div className="columns">
                <div className="column">
                    <div className="columns">
                        <div className="column">
                            <div className="card events-card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        Check ins
                                    </p>
                                    <a href="#" className="card-header-icon" aria-label="more options">
                                      <span className="icon">
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                      </span>
                                    </a>
                                </header>
                                <div className="card-table">
                                    <div className="content">
                                        <table className="table is-fullwidth is-striped">
                                            <tbody>
                                                {checkIns.map(checkIn => {
                                                  return <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"></i>{checkIn.feeling}</td>
                                                    <td>{checkIn.mood}</td>
                                                    <td>{checkIn.optionalComment}</td>
                                                    <td>{checkIn.timestamp}</td>
                                                  </tr>;
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
      </div>
    );
  }
}

export default App;
