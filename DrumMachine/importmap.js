const im = document.createElement("script");
im.type = "importmap";
im.textContent = JSON.stringify({
  imports: {
    react: "https://esm.sh/react?dev",
    "react-dom/client": "https://esm.sh/react-dom/client?dev",
    "react-bootstrap": "https://esm.sh/react-bootstrap?dev",
    "react-audio-player": "https://esm.sh/react-audio-player?dev"
  }
});
document.currentScript.after(im);
