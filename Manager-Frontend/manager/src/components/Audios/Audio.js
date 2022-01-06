import React, { Component } from "react"
import Flocky from "./Music/Flocky.mp3"
import Paranoid from "./Music/Paranoid.mp3"
import Intro from "./Music/Intro.mp3"
import { Howl, Howler } from "howler"

const audioClips = [
  { sound: Flocky, label: "🔥" },
  { sound: Paranoid, label: "🐐" },
  { sound: Intro, label: "💔" }
]

class Audio extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({ src })
    this.audioPlaying(sound)
  }

  audioPlaying = (sound) => {
    return sound.playing() ? sound.pause() : sound.play();
  }

  RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button key={index} onClick={() => this.SoundPlay(soundObj.sound)} className="nav-item">{soundObj.label}</button>
      )
    })
  }

  render() {
    Howler.volume(1.0)
    return (
      <div>
        {this.RenderButtonAndSound()}
      </div>
    )
  }
}

export default Audio;
