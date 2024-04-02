class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RandomQuote />;
  }
}

class RandomQuote extends React.Component {
  static propTypes = {
    content: PropTypes.string,
    author: PropTypes.string
  };

  static defaultProps = {
    content: "",
    author: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: ""
    };
  }

  handleSubmit = () => {
   this.getNewQuote();
  }

  async componentDidMount() {
     await this.getNewQuote();
  }

  getNewQuote = async () => {
  const url = "https://public-api.wordpress.com/rest/v1.1/sites/quiteaquote.in/posts/?"+
    new URLSearchParams({
      pretty: true,
      context: "display",
      page: 1,
      number: 1,
      fields: "found",
      category: "thought for today",
      type: "post",
      status: "publish"
    }).toString();

  const result = await fetch(url)
    .then(response => response.json());
  console.log("Fetched from: " + url);
  console.log(result);
  const count = result.found;
  const rnd = Math.ceil(Math.random() * count);
  await this.getRandomQuoteIdx(rnd);
}

getRandomQuoteIdx = async (index) => {
  const url = "https://public-api.wordpress.com/rest/v1.1/sites/quiteaquote.in/posts/?"+
    new URLSearchParams({
      pretty: true,
      context: "display",
      page: index,
      number: 1,
      fields: "content, title",
      category: "thought for today",
      type: "post",
      status: "publish"
    }).toString();

  const result = await fetch(url)
    .then(response => response.json());
  console.log("Fetched from: " + url);
  console.log(result);
  const title = result.posts[0].title;
  const content = result.posts[0].content;
  const author = title.split(":", 1)[0];
  const quote = {
    content: content,
    author: author
  };
  console.log(quote);
  this.setState(quote);
}

  render() {
    return (
      <section id="quote-box" className="quote-box">
        <div id="text" className="quote-content"
        dangerouslySetInnerHTML={
          {__html: this.state.content}}>
        </div>
        <p id="author" className="quote-author">
          {this.state.author}
        </p>
        <button id="new-quote" className="new-quote-button" type="button" onClick={this.handleSubmit}>
          New Quote
        </button>
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          className="tweet-quote"
        ></a>
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
