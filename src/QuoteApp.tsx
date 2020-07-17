import React from 'react';
import './App.css';

type QuoteProps = {
    quotes: string[]
}

type QuoteState = {
    currentIndex: number,
}

export default class QuoteApp extends React.Component<QuoteProps, QuoteState> {
    state: QuoteState = {
        currentIndex: 0,
    };

    getIndex = (): number => {
        // avoid infinite loop if there is only one quote
        if (this.props.quotes.length === 1) {
            return this.state.currentIndex;
        }

        // get a random index that is not the same as the current index
        var next;
        do {
            next = Math.floor(Math.random() * this.props.quotes.length);
        } while (next === this.state.currentIndex);
        return next;
    };

    getNextQuote = (): void => this.setState(state => ({currentIndex: this.getIndex()}));

    render() {
        const quoteToDisplay = this.props.quotes[this.state.currentIndex];
        return <div className="App">
            <header className="App-header">
                <h3>Render Component with State and Props using TypeScript</h3>
            </header>
            <div style={{height: "5vh", padding: "1em", margin: "7em"}}>
                <h4>{quoteToDisplay}</h4>
            </div>
            <button onClick={this.getNextQuote}>NEXT QUOTE</button>
        </div>
    }
}