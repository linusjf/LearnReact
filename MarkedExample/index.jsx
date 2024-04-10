import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

const md = "This ~is not~ strikethrough, but ~~this is~~!";

const markdownjs = `Here is some JavaScript code:

\`\`\`js
console.log('It works!')
\`\`\`

~~~js
console.log('It works with tilde ~ too!')
~~~
`;

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);
root.render(
  <StrictMode>
    <Markdown># Hello *world*!</Markdown>
    <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
      {md}
    </Markdown>
    <Markdown
      children={markdownjs}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        }
      }}
    />
  </StrictMode>
);
