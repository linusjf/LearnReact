class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
      username: "john"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: "React Rocks!",
      username: "lewis"
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
