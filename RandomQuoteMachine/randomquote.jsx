class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RandomQuote />;
  }
}

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: "",
      title: "",
      URL: ""
    };
  }

  handleSubmit = () => {
    this.getNewQuote();
  };

  async componentDidMount() {
    await this.getNewQuote();
  }

  getNewQuote = async () => {
    const url =
      "https://public-api.wordpress.com/rest/v1.1/sites/quiteaquote.in/posts/?" +
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

    const result = await fetch(url).then((response) => response.json());
    console.log("Fetched from: " + url);
    console.log(result);
    const count = result.found;
    const rnd = Math.ceil(Math.random() * count);
    await this.getRandomQuoteIdx(rnd);
  };

  getRandomQuoteIdx = async (index) => {
    const url =
      "https://public-api.wordpress.com/rest/v1.1/sites/quiteaquote.in/posts/?" +
      new URLSearchParams({
        pretty: true,
        context: "display",
        page: index,
        number: 1,
        fields: "content, title, URL",
        category: "thought for today",
        type: "post",
        status: "publish"
      }).toString();

    const result = await fetch(url).then((response) => response.json());
    console.log("Fetched from: " + url);
    console.log(result);
    const title = result.posts[0].title;
    const content = result.posts[0].content;
    const URL = result.posts[0].URL;
    const author = title.split(":", 1)[0];
    console.log("About to sanitize...");
    const quoteData = {
      content: HtmlSanitizer.SanitizeHtml(content),
      author: author,
      title: title,
      URL: URL
    };
    console.log(quoteData);
    this.setState(quoteData);
  };

  render() {
    const twitterParams = new URLSearchParams({
      text: this.state.title,
      url: this.state.URL
    }).toString();
    return (
      <section id="quote-box" className="quote-box">
        <div
          id="text"
          className="quote-content border border-info border-3 rounded"
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        ></div>
        <p id="author" className="quote-author">
          {this.state.author}
        </p>
        <div className="btns">
        <a
          href={"https://twitter.com/intent/tweet?" + twitterParams}
          id="tweet-quote"
          className="btn-primary btn-large"
          target="_blank"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <button
          id="new-quote"
          className="btn btn-primary btn-large"
          type="button"
          onClick={this.handleSubmit}
        >
          New Quote
        </button>
      </div>
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
