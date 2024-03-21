const JSX = (
  <div>
    {/* This is a comment */}
    <h1>This is a block of JSX</h1>
    <p>Here&apos;s a subtitle</p>
  </div>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(JSX);
