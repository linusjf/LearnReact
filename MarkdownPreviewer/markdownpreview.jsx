class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MarkdownPreviewer />;
  }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MarkdownEditor />;
  }
}

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <section className="section-editor">
        <textarea id="editor" className="editor"></textarea>;
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
