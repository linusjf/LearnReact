const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line
const container = document.getElementById('challenge-node');
const root = ReactDOM.createRoot(container);
root.render(JSX);
