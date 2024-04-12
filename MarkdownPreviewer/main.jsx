import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import testString from "./markdown.js";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

console.log(testString);

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
    this.setState((prevState) => ({
      input: evt.target.value
    }));
  };

  componentDidMount() {
    this.setState((prevState) => ({
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

  render() {
    const btnClasses = this.state.max ? "fa fa-compress": "fa fa-arrows-alt";
    return (
      <Card className="editor">
        <Card.Header
          as="div"
          className="editor-header d-flex flex-row bg-primary align-items-center"
        >
          <p className="flex-fill text-left mt-2 mb-2">Editor</p>
          <i className={btnClasses}></i>
        </Card.Header>
        <Form.Control
          as="textarea"
          id="editor"
          value={this.props.input}
          onChange={this.props.onchange}
        ></Form.Control>
      </Card>
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

  render() {
    const btnClasses = this.state.max ? "fa fa-compress": "fa fa-arrows-alt";
    return (
      <Card>
        <Card.Header
          as="div"
          className="editor-header d-flex flex-row bg-primary align-items-center"
        >
          <p className="flex-fill text-left mt-2 mb-2">Preview</p>
          <i className={btnClasses}></i>
        </Card.Header>
        <Markdown
          className="preview"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {this.props.input}
        </Markdown>
      </Card>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
