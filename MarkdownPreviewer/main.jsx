import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import { Form } from "react-bootstrap";
import testString from "markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MarkdownPreviewer />;
  }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleEdit = (evt) => {
    this.setState(() => ({
      input: evt.target.value
    }));
  };

  componentDidMount() {
    this.setState(() => ({
      input: testString
    }));
  }

  render() {
    return (
      <>
        <MarkdownEditor input={this.state.input} onchange={this.handleEdit} />
        <HTMLPreview input={this.state.input} />
      </>
    );
  }
}

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: false
    };
  }

  handleBtnToggle = () => {
    this.setState((state) => ({
      max: !state.max
    }));
  };

  render() {
    const title = "Editor";
    const cardClass = this.state.max ? "editor-max" : "editor";
    return (
      <div className={cardClass}>
        <div
          className="header d-flex flex-row bg-primary align-items-center rounded-top"
          onClick={this.handleBtnToggle}
        >
          <p className="flex-fill text-left ms-3 mt-2 mb-2">{title}</p>
          {this.state.max ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrows-angle-contract mr-1 pr-1 border-light"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"
              />
            </svg>
          ) : (
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrows-fullscreen mr-1 pr-1 border-light"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
              />
            </svg>
          )}
        </div>
        <Form.Control
          as="textarea"
          id="editor"
          value={this.props.input}
          onChange={this.props.onchange}
        ></Form.Control>
      </div>
    );
  }
}

class HTMLPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: false
    };
  }

  handleBtnToggle = () => {
    this.setState((state) => ({
      max: !state.max
    }));
  };

  render() {
    const cardClass = this.state.max ? "preview-max" : "preview";
    return (
      <div className={cardClass}>
        <div
          className="header d-flex flex-row bg-primary align-items-center rounded-top"
          onClick={this.handleBtnToggle}
        >
          <p className="flex-fill text-left ms-3 mt-2 mb-2">Preview</p>
          {this.state.max ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrows-angle-contract mr-1 pr-1 my-0 border-light"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrows-fullscreen mr-1 pr-1 border-light"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
              />
            </svg>
          )}
        </div>
        <div id="preview" className="htmlpreview">
          <Markdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw]}
          >
            {this.props.input}
          </Markdown>
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
