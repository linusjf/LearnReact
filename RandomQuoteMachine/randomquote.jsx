class App extends React.Component {
  constructor(props) {
    super(props);
    HtmlSanitizer.AllowedTags["FIGURE"] = true;
    delete HtmlSanitizer.AllowedCssStyles["color"];
    delete HtmlSanitizer.AllowedCssStyles["background-color"];
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
      URL: "",
      retrieved: false
    };
  }

  handleSubmit = () => {
    this.setState({ retrieved: false });
    setTimeout(this.getNewQuote, 1000);
  };

  async componentDidMount() {
    await this.getNewQuote();
  }

  getNewQuote = async () => {
    const url =
      "https://public-api.wordpress.com/rest/v1.1/sites/quiteaquote.in/posts/?" +
      new URLSearchParams({
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

  stripGettyCodes(content) {
   const re = /http:[\/][\/]www[.]gettyimages[.]com[\/]detail[\/][0-9]+/g;
   content = content.replaceAll(re, "");
   content = content.replaceAll("Embed from Getty Images", "");
   return content;
  }

  getRandomQuoteIdx = async (index) => {
    const url =
      "https://public-api.wordpress.com/rest/v1.1/sites/quiteaquote.in/posts/?" +
      new URLSearchParams({
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
    const quoteData = {
      content: this.stripGettyCodes(HtmlSanitizer.SanitizeHtml(content)),
      author: author,
      title: title,
      URL: URL,
      retrieved: true
    };
    console.log(quoteData);
    this.setState(quoteData);
  };

  render() {
    const twitterParams = new URLSearchParams({
      text: this.state.title,
      url: this.state.URL
    }).toString();
    const classes = this.state.retrieved
      ? "spinner-box"
      : "fas fa-spinner animate-spin spinner-box";
    const spanClasses = "visually-hidden";
    const divClasses =
      "d-block quote-content border border-info border-3 rounded";
    return (
      <section id="quote-box" className="quote-box">
        <div
          id="text"
          className={divClasses}
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        ></div>
        <div className={classes} role="status">
          <span className={spanClasses}>Retrieving quote...</span>
        </div>
        <p id="author" className="quote-author">
          {this.state.author}
        </p>
        <div className="btns">
          <a
            href={"https://twitter.com/intent/tweet?" + twitterParams}
            id="tweet-quote"
            className="btn btn-primary btn-large"
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
