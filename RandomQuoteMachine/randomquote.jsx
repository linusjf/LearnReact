import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RandomQuote />;
  }
}

class RandomQuote extends React.Component {
  static propTypes = {
    content: PropTypes.string,
    author: PropTypes.string
  };

  static defaultProps = {
    content: "",
    author: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: ""
    };
  }

  render() {
    return (
      <section id="quote-box" className="quote-box">
        <div id="text" className="quote-content">
          {this.state.content}
        </div>
        <p id="author" className="quote-author">
          {this.state.author}
        </p>
        <button id="new-quote" className="new-quote-button">
          New Quote
        </button>
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          className="tweet-quote"
        ></a>
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
