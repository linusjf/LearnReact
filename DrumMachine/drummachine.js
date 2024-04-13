const newAudio = (url) => {
  const audio = new Audio(url);
  audio.muted = false;
  audio.volume = 0.5;
  audio.paused = true;
  audio.setAttribute("data-ready", false);
  audio.addEventListener("canplaythrough", (event) => {
    /* the audio is now playable;*/
    audio.setAttribute("data-ready", true);
  });
  return audio;
};

const drumsets = {
  heater_kit: {
    heater_1: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    ),
    heater_2: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    ),
    heater_3: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    ),
    heater_4: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    ),
    clap: newAudio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"),
    open_hh: newAudio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"),
    kick_n_hat: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    ),
    kick: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    ),
    closed_hh: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    )
  },
  smooth_piano_kit: {
    chord_1: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    ),
    chord_2: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    ),
    chord_3: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    ),
    give_us_a_light: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    ),
    dry_ohh: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    ),
    bid_h1: newAudio("https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"),
    punchy_kick: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    ),
    side_stick_1: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    ),
    snare: newAudio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")
  }
};

export default drumsets;
