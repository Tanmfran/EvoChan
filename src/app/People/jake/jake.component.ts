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
    this.soundMakerService.playSound(    '/../assets/goodbye-jojo.mp3');
  }
}
