import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundMakerService {
  audio = new Audio();
  constructor() {
  }

  playSound = (audioSource: string) => {
    this.audio.src = audioSource;
    this.audio.load();
    this.audio.play();
  }
}
