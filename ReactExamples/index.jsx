class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: [
        {
          name: "MyApp",
          address: "/MyApp.html"
        },
        {
          name: "Hedy Lamarr",
          address: "/hedylamarr.html"
        },
        {
          name: "Products",
          address: "/products.html"
        },
        {
          name: "Counters",
          address: "/counters.html"
        }
      ]
    };
  }

  render() {
    const examples = this.state.examples.map((example) => (
      <a key={example.name} href={example.address}>
        {example.name}
      </a>
    ));
    return examples;
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Examples />);
