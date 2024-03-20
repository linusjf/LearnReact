class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
  }
}

Results.propTypes = {
  fiftyFifty: PropTypes.bool
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {counter: prevState.counter + 1};
    });
  };

  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<GameOfChance />);
