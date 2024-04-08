class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MarkdownPreview />;
  }
}

class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return <section />;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
