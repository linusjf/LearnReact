class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);    
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
   this.setState(({
     input: e.target.value
   })
  );
}

  submitMessage() {
   this.setState(prevState => ({
    messages : [...prevState.messages, prevState.input], input: ""
   }));
  }

  
  render() {
    const listitem = (val) => {
      return <li>{val}</li>;
    };
    const msgs = this.state.messages.map(listitem);

    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
<input type="text" onChange={this.handleChange} value={this.state.input}></input>
<button type="submit" onClick={this.submitMessage}>Add message</button>
<ul>
{msgs}
</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};