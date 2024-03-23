class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  }
  toggleVisibility = () => {
    this.setState((prevState) => ({
      visibility: !prevState.visibility
    }));
  };

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button className="inc" onClick={this.toggleVisibility}>
            Click Me
          </button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button className="inc" onClick={this.toggleVisibility}>
            Click Me
          </button>
        </div>
      );
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);
