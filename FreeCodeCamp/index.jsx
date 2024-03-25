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
          name: "Another way",
          address: "/anotherway.html"
        },
        {
          name: "Create Component",
          address: "/createcomponent.html"
        },
        {
          name: "From Scratch",
          address: "/fromscratch.html"
        },
        {
          name: "Bind to this",
          address: "/bind.html"
        },
        {
          name: "Stateful component",
          address: "/statefulcomponent.html"
        },
        {
          name: "Set state",
          address: "/setstate.html"
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
          name: "Using Props",
          address: "/usingprops.html"
        },
        {
          name: "Access Props",
          address: "/accessprops.html"
        },
        {
          name: "Pass Props",
          address: "/passprops.html"
        },
        {
          name: "Pass array as props",
          address: "/passarrayasprops.html"
        },
        {
          name: "Event listeners",
          address: "/eventlisteners.html"
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
          name: "Render State",
          address: "/renderstate.html"
        },
        {
          name: "From Props",
          address: "/fromprops.html"
        },
        {
          name: "Controlled Input",
          address: "/controlledinput.html"
        },
        {
          name: "Controlled Form",
          address: "/controlledform.html"
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
          name: "Concise Conditional",
          address: "/conciseconditional.html"
        },
        {
          name: "Intro to Inline Styles",
          address: "/introinline.html"
        },
        {
          name: "Inline Styles",
          address: "/inlinestyles.html"
        },
        {
          name: "Change Inline CSS",
          address: "/changeinlinecss.html"
        },
        {
          name: "Should Component Update",
          address: "/shouldcomponentupdate.html"
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
