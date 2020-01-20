import React, { Component, Fragment } from 'react';
import './SynonymsList.css';

class SynonymsList extends Component {
    state = {
        predictions: []
    }
    async componentDidMount () {
        const { word } = this.props.selectedWord;
        const cleanWord = word.replace(/[^A-Z0-9]+/ig, "");
        const response = await fetch(`https://api.datamuse.com/words?rel_syn=${cleanWord}`)
        const result = await response.json();
        this.setState({ predictions: result });
    }
    render() {
        const { replaceWord } = this.props;
        return (
            !!this.state.predictions.length && (
                <div id="predictions-list">
                    {this.state.predictions.map(prediction => (
                        <Fragment key={prediction.score}>
                            <span className='predictionWord'
                                onClick={replaceWord(prediction.word)}
                            >{prediction.word}</span>
                            <span>  </span>
                        </Fragment>
                    ))}
                </div>
            )
        );
    }
}

export default SynonymsList;
