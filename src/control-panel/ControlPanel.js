import React, { Component } from 'react';
import clx from 'classnames';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        const { selectedWord, toggleStyle } = this.props;
        console.log(selectedWord);
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button
                        className={clx(selectedWord && selectedWord.isBold && 'activeBtn',
                            "format-action")}
                        type="button"
                        onClick={selectedWord ? toggleStyle('isBold') : null}><b>B</b></button>
                    <button
                        className={clx(selectedWord&& selectedWord.isItalic && 'activeBtn',
                            "format-action")}
                        type="button"
                        onClick={selectedWord ? toggleStyle('isItalic') : null}><i>I</i></button>
                    <button 
                        className={clx(selectedWord && selectedWord.isUnderline && 'activeBtn',
                            "format-action")}
                        type="button"
                        onClick={selectedWord ? toggleStyle('isUnderline') : null}><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
