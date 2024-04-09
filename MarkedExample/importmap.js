const im = document.createElement("script");
im.type = "importmap";
im.textContent = JSON.stringify({
  imports: {
    react: "https://esm.sh/react?dev",
    "react-dom/client": "https://esm.sh/react-dom/client?dev",
    "marked-react": "https://cdn.jsdelivr.net/npm/marked-react@2.0.0/+esm",
    "react-markdown": "https://esm.sh/react-markdown@9?bundle"
  }
});
document.currentScript.after(im);
