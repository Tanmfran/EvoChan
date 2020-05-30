import { Component, OnInit } from '@angular/core';
import {SoundMakerService} from '../../sound-maker.service';

@Component({
  selector: 'app-evo',
  templateUrl: './evo.component.html',
  styleUrls: ['./evo.component.css']
})
export class EvoComponent {
  constructor(private soundMakerService: SoundMakerService) {
  }
//    this.audio.src = '../../assets/anime-sound-008.mp3';
  playIt = () => {
    this.soundMakerService.loadSound('../../assets/anime-sound-008.mp3');
    this.soundMakerService.playSound();
  }
}
