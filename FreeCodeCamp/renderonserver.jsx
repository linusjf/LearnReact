class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Rendered to string</p>
      </div>
    );
  }
}

ReactDOMServer.renderToString(<App />);
