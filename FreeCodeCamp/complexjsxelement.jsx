const JSX = (
  <div>
    <h1>Title</h1>
    <p>List</p>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </div>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(JSX);
