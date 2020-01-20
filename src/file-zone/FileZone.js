import React, { Component } from 'react';
import './FileZone.css';
import SingleWord from '../single-word/SingleWord';

class FileZone extends Component {
    render() {
        return (
            <div id="file-zone">
                <div id="file" onClick={this.props.clearSelectedWord}>
                    {this.props.arrayOfWords.map(wordObject => (
                        <SingleWord
                            key={wordObject.id}
                            onSelectWord={this.props.onSelectWord}
                            {...wordObject}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default FileZone;
