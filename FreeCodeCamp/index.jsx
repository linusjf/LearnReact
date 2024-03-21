class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: [
        {
          name: 'Complex JSX element',
          address: '/complexjsxelement.html'
        },
        {
          name: 'Render to DOM',
          address: '/rendertodom.html'
        },
        {
          name: 'From Props',
          address: '/fromprops.html'
        },
        {
          name: 'Array Filter',
          address: '/arrayfilter.html'
        },
        {
          name: 'Use Array Map',
          address: '/usearraymap.html'
        },
        {
          name: 'Sibling Elements',
          address: '/siblingelements.html'
        },
        {
          name: 'Change Inline CSS',
          address: '/changeinlinecss.html'
        },
        {
          name: 'Render On Server',
          address: '/renderonserver.html'
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

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Examples />);
