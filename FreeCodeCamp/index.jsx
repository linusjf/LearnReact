class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: [
        {
          name: "From Props",
          address: "/fromprops.html",
        },
        {
          name: "Array Filter",
          address: "/arrayfilter.html",
        },
        {
          name: "Use Array Map",
          address: "/usearraymap.html",
        }
      ]
    };
  }

  render() {
    const examples = this.state.examples.map( (example) =>
      <a href={example.address}>{example.name}</a>);
    return examples;
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Examples />);
