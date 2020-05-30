import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundMakerService {
  audio = new Audio();
  constructor() {
  }

  loadSound = (audioSource: string) => {
    this.audio.src = audioSource;
    this.audio.load();
  }

  playSound = () => {
    this.audio.play();
  }
}
