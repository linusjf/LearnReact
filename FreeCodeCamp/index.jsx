class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: [
        {
          name: "Hello JSX",
          address: "/hello.html"
        },
        {
          name: "Complex JSX element",
          address: "/complexjsxelement.html"
        },
        {
          name: "Add comments",
          address: "/addcomments.html"
        },
        {
          name: "Self Closing Tags",
          address: "/selfclosing.html"
        },
        {
          name: "HTML Class",
          address: "/htmlclass.html"
        },
        {
          name: "Stateless",
          address: "/stateless.html"
        },
        {
          name: "Create Component",
          address: "/createcomponent.html"
        },
        {
          name: "Composition",
          address: "/composition.html"
        },
        {
          name: "Nested Components",
          address: "/nestedcomponents.html"
        },
        {
          name: "Compose Components",
          address: "/composecomponents.html"
        },
        {
          name: "Use Prop Types",
          address: "/useproptypes.html"
        },
        {
          name: "Use Default Props",
          address: "/usedefaultprops.html"
        },
        {
          name: "Override Default Props",
          address: "/overridedefaultprops.html"
        },
        {
          name: "Simple Counter",
          address: "/simplecounter.html"
        },
        {
          name: "Toggle",
          address: "/toggle.html"
        },
        {
          name: "Render to DOM",
          address: "/rendertodom.html"
        },
        {
          name: "From Props",
          address: "/fromprops.html"
        },
        {
          name: "Array Filter",
          address: "/arrayfilter.html"
        },
        {
          name: "Use Array Map",
          address: "/usearraymap.html"
        },
        {
          name: "Sibling Elements",
          address: "/siblingelements.html"
        },
        {
          name: "Change Inline CSS",
          address: "/changeinlinecss.html"
        },
        {
          name: "Render On Server",
          address: "/renderonserver.html"
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
