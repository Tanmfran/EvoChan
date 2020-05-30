import { Component, OnInit } from '@angular/core';
import {SoundMakerService} from '../../sound-maker.service';

@Component({
  selector: 'app-jake',
  templateUrl: './jake.component.html',
  styleUrls: ['./jake.component.css']
})
export class JakeComponent {
  constructor(private soundMakerService: SoundMakerService) {
  }

  playIt = () => {
    this.soundMakerService.loadSound('/../assets/goodbye-jojo.mp3');
    this.soundMakerService.playSound();
  }
}
