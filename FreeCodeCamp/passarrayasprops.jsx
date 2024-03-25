const List = (props) => {
  return <p>{props.tasks.join(",")}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "workout", "bake cake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["pay electricity bill", "meetup", "zumba class"]} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDo />);
