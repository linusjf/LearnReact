import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import testString from "./markdown.js";
import { Provider } from "react-redux";

console.log(testString);

const initialState = {
  input: "",
  editorMax: false,
  previewMax: false,
  status: "idle"
};

const previewerSlice = createSlice({
  name: "previewer",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    togglePreview: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.previewMax = !state.previewMax;
    },
    toggleEditor: (state) => {
      state.editorMax = !state.editorMax;
    },
    updateInput: (state, action) => {
      state.input = action.payload;
    }
  }
});

const { togglePreview, toggleEditor, updateInput } = previewerSlice.actions;

const selectPreviewMax = (state) => state.previewMax;
const selectEditorMax = (state) => state.editorMax;
const selectInput = (state) => state.input;

const previewerReducer = previewerSlice.reducer;

const store = configureStore({
  reducer: {
    previewer: previewerReducer
  }
});

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
    return (
      <>
        <MarkdownEditor />
        <HTMLPreview />
      </>
    );
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
        <Form.Control as="textarea" id="editor" rows={15}>
          {this.state.input}
        </Form.Control>
      </Card>
    );
  }
}

class HTMLPreview extends React.Component {
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
          <p className="flex-fill text-left mt-2 mb-2">Preview</p>
          <i className="fa fa-arrows-alt"></i>
        </Card.Header>
        <Markdown className="preview">{this.state.input}</Markdown>
      </Card>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
