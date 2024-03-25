class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }
  toggleDisplay = () => {
    this.setState((state) => ({
      display: !state.display
    }));
  };
  render() {
    // Change code below this line
    if (this.state.display)
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    else
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);
