import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import SynonymsList from "./synonyms-list/SynonymsList";
import InputArea from "./input-area/InputArea";
import getMockText from './text.service';

class App extends Component {
    state = {
        selectedWord: null,
        arrayOfWords: []
    }

    componentDidMount() {
        this.getText();
    }

    updateText = text => {
        const words = text.split(' ').map(word => {
            const wordObject = {
                isBold: false,
                isItalic: false,
                isUnderline: false,
                word,
                id: `f${(~~(Math.random()*1e8)).toString(16)}`
            }
            return wordObject;
        })
        this.setState({ arrayOfWords: words, selectedWord: null });
    }

    toggleStyle = prop => () => {
        const { selectedWord, arrayOfWords } = this.state;
        const updatedWordsArray = arrayOfWords.map(word => {
            if (word.id === selectedWord.id) {
                const updatedWord = {...word};
                updatedWord[prop] = !word[prop];
                return updatedWord;
            } else return word;
        });
        this.setState(prevState => ({
            arrayOfWords: updatedWordsArray,
            selectedWord: updatedWordsArray.find(word => word.id === prevState.selectedWord.id)
        }));
    }

    getText() {
        getMockText().then(result => {
            console.log(result);
            const words = result.split(' ').map(word => {
                const wordObject = {
                    isBold: false,
                    isItalic: false,
                    isUnderline: false,
                    word,
                    id: `f${(~~(Math.random()*1e8)).toString(16)}`
                }
                return wordObject
            })
            this.setState({ arrayOfWords: words });
        });
    }

    onSelectWord = id => {
        this.setState({ selectedWord: this.state.arrayOfWords.find(word => word.id === id) });
    }

    clearSelectedWord = () => this.setState({ selectedWord: null });

    replaceWord = text => () => {
        const { selectedWord, arrayOfWords } = this.state;
        const updatedSelectedWord = {...selectedWord, word: text};
        const updatedWordsArray = arrayOfWords.map(word => {
            if (word.id === updatedSelectedWord.id) {
                return updatedSelectedWord;
            } else return word;
        });
        this.setState({
            arrayOfWords: updatedWordsArray,
            selectedWord: null
        });
    }

    render() {
        const { selectedWord, arrayOfWords } = this.state;
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel selectedWord={selectedWord} toggleStyle={this.toggleStyle}/>
                    {!!selectedWord && (
                        <SynonymsList
                            selectedWord={selectedWord}
                            replaceWord={this.replaceWord}
                        />
                    )}
                    <InputArea updateText={this.updateText} />
                    <FileZone
                        arrayOfWords={arrayOfWords}
                        onSelectWord={this.onSelectWord}
                        clearSelectedWord={this.clearSelectedWord}
                    />
                </main>
            </div>
        );
    }
}

export default App;
