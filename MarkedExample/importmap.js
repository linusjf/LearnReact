const im = document.createElement("script");
im.type = "importmap";
im.textContent = JSON.stringify({
  imports: {
    react: "https://esm.sh/react?dev",
    "react-dom/client": "https://esm.sh/react-dom/client?dev",
    "react-markdown": "https://esm.sh/react-markdown@9?bundle",
    "remark-gfm": "https://esm.sh/remark-gfm?dev",
    "react-syntax-highlighter": "https://esm.sh/react-syntax-highlighter?dev"
  }
});
document.currentScript.after(im);
