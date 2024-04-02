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
    return <section id="quote-box"></section>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
