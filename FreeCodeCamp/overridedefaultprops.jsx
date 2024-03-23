const Items = (props) => {
  return <h2>Current Quantity of Items in Cart: {props.quantity}</h2>;
};

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <hgroup>
        <h1>Shopping Cart</h1>
        <Items quantity={10} />
      </hgroup>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShoppingCart />);
