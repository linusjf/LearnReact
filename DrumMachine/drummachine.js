const newAudio = (url) => {
  const audio = new Audio(url);
  audio.muted = false;
  audio.volume = 0.5;
  audio.paused = true;
};
