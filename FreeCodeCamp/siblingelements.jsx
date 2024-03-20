/* eslint no-unused-vars: 0 */ // --> OFF
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue',
];

function Frameworks() {
  const frameworks = (fm) => {
    return <li key={fm}>{fm}</li>;
  };

  const renderFrameworks = frontEndFrameworks.map(frameworks);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
