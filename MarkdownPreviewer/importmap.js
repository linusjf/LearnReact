const im = document.createElement("script");
im.type = "importmap";
im.textContent = JSON.stringify({
  imports: {
    react: "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
    "react-bootstrap": "https://esm.sh/react-bootstrap@2.10.2",
    "react-markdown": "https://esm.sh/react-markdown@9?bundle",
    "remark-gfm": "https://cdn.jsdelivr.net/npm/remark-gfm@4.0.0/+esm",
    "rehype-raw": "https://cdn.jsdelivr.net/npm/rehype-raw@7.0.0/+esm",
    "remark-breaks": "https://esm.sh/remark-breaks@4?bundle",
    markdown: "/markdown.mjs"
  }
});
document.currentScript.after(im);
