import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  editorMax: false,
  previewMax: false,
  status: "idle"
};

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
  }

  render() {
    return <MarkdownEditor />;
  }
}

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <Card>
        <Card.Header
          as="div"
          className="editor-header d-flex flex-row bg-primary align-items-center"
        >
          <p className="flex-fill text-left mt-2 mb-2">Editor</p>
          <i className="fa fa-arrows-alt"></i>
        </Card.Header>
        <Form.Control as="textarea" id="editor" rows={15} />
      </Card>
    );
  }
}

class HTMLPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ""
    };
  }

  render() {
    return (
      <Card>
        <Card.Header
          as="div"
          className="editor-header d-flex flex-row bg-primary align-items-center"
        >
          <p className="flex-fill text-left mt-2 mb-2">Preview</p>
          <i className="fa fa-arrows-alt"></i>
        </Card.Header>
        <Form.Control as="textarea" id="preview" rows={15} />
      </Card>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
