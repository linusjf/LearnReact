class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* Change code below this line */}
        <NonCitrus />
        <Citrus />
        {/* Change code above this line */}
      </div>
    );
  }
}

class NonCitrus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Non-citrus:</h3>
          <ul>
            <li>Apple</li>
            <li>Banana</li>
            </ul>
      </div>
    );
  }
}

class Citrus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Citrus:</h3>
          <ul>
            <li>Orange</li>
            <li>Lemon</li>
            <li>Grapefruit</li>
            </ul>
      </div>
    );
  }
}

class Vegetables extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Vegetables:</h2>
        <div>
          <ul>
            <li>Cabbage</li>
            <li>Cauliflower</li>
            <li>Brinjal</li>
            <li>Carrot</li>
            <li>Radish</li>
            </ul>
          </div>
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TypesOfFood />);
