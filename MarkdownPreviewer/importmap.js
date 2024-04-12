const im = document.createElement("script");
im.type = "importmap";
im.textContent = JSON.stringify({
  imports: {
    react: "https://esm.sh/react?dev",
    "react-dom/client": "https://esm.sh/react-dom/client?dev",
    "react-bootstrap": "https://esm.sh/react-bootstrap?dev",
    "react-markdown": "https://esm.sh/react-markdown@9?bundle",
    "remark-gfm": "https://cdn.jsdelivr.net/npm/remark-gfm@4.0.0/+esm",
    "rehype-raw": "https://cdn.jsdelivr.net/npm/rehype-raw@7.0.0/+esm"
  }
});
document.currentScript.after(im);
