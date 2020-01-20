import React, { Component, Fragment } from 'react';
import './InputArea.css';

class InputArea extends Component {
    state = {
        inputValue: ''
    }

    saveText = e => {
        if (e.charCode === 13) {
            this.props.updateText(e.target.value)
        }
    }

    render() {
        return (
            <input
              name="textArea"
              id="textArea"
              onChange={e => this.setState({ inputValue: e.target.value })}
              onKeyPress={this.saveText}
            />
        );
    }
}

export default InputArea;
