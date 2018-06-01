import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feelings from './Feelings';
import Moods from './Moods';
import classNames from 'classnames';

const initialState = {
  selectedMood: null,
  selectedFeeling: null,
  optionalCommentText: '',
};

class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    const { showModal, onAccept, onCancel } = this.props;
    const { selectedFeeling, selectedMood, optionalCommentText } = this.state;
    const modalClasses= classNames({
      'modal': true,
      'is-active': showModal,
    });

    return (
      <div>
        <div className={modalClasses}>
          <div className="modal-background" onClick={() => {
            this.setState(initialState);
            onCancel();
          }}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">How are you?</p>
              <button onClick={() => {
                this.setState(initialState);
                onCancel();
              }} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">

              <div className="columns is-multiline is-mobile">
                <div className="column is-full">
                  How do you feel?
                </div>
                {Feelings.map(feeling => {
                  const feelingClasses = classNames({
                    'column is-half-mobile is-one-third-tablet': true,
                    'has-background-success': feeling.name === selectedFeeling,
                  });
                  return <div className={feelingClasses} onClick={() => this.setState({ selectedFeeling: feeling.name })}>
                    <p className="title">{feeling.emoji}</p>
                    <p className="subtitle">{feeling.name}</p>
                  </div>;
                })}
              </div>
              <div className="columns is-multiline is-mobile">
                <div className="column is-full">
                  What's your mood from 1 (bad) to 7 (great)?
                </div>
                {Moods.map(mood => {
                  const moodClasses = classNames({
                    'column is-one-third-mobile is-one-seventh-tablet': true,
                    'has-background-success': mood === selectedMood,
                  });
                  return <div className={moodClasses} onClick={() => this.setState({ selectedMood: mood })}>
                    <p className="title">{mood}</p>
                  </div>;
                })}
              </div>
              <div className="field">
                <label className="label">Any comments? (Optional)</label>
                <div className="control">
                  <textarea
                    onChange={(e) => this.setState({ optionalCommentText: e.target.value })}
                    className="textarea"
                    placeholder="Textarea"
                    value={optionalCommentText}
                  >
                  </textarea>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button
                disabled={!(selectedFeeling && selectedMood)}
                onClick={() => {
                  onAccept({feeling: selectedFeeling, mood: selectedMood, optionalComment: optionalCommentText});
                  this.setState(initialState);
                }}
                className="button is-success">
                  Check in
              </button>
              <button onClick={() => {
                this.setState(initialState);
                onCancel();
              }} className="button">Cancel</button>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Modal;