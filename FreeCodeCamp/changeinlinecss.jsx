class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    const inputStyle = {border: '1px solid black'};
    const dangerStyle = {border: '3px solid red'};
    return (
      <div>
        <h3>Don&rsquo;t Type Too Much:</h3>
        <input
          style={this.state.input.length > 15 ? dangerStyle : inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<GateKeeper />);
