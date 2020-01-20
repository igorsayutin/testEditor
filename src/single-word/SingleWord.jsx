import React, { Component, Fragment } from 'react';
import clx from 'classnames';
import './SingleWord.css';

class SingleWord extends Component {
    render() {
      const { isBold, isItalic, isUnderline, word, id, onSelectWord } = this.props;
        return (
          <Fragment>
            <span
              className={clx(
                isBold && 'bold',
                isItalic && 'italic',
                isUnderline && 'underline'
              )}
              onDoubleClick={() => onSelectWord(id)}
            >{word}</span>
            <span> </span>
          </Fragment>
        );
    }
}

export default SingleWord;
