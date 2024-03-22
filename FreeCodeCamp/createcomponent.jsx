class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <Kitten />
      </div>
    );
  }
}

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hi, I'm a kitten!</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);
