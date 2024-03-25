class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name="Happy" />
      </div>
    );
  }
}

class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>{this.props.name}</p>
      </>
    );
  }
}

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: "CamperBot"
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CampSite />);
