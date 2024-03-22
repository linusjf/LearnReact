const MyComponent = function () {
  return (
    <div>
      <p>Some string of text</p>
      <DemoComponent />
    </div>
  );
};

const DemoComponent = function () {
  return <div className="custom-class" />;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyComponent />);
