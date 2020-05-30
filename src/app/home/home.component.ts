import { Component, OnInit } from '@angular/core';
import {SoundMakerService} from '../sound-maker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count = 0;
  constructor(private soundMakerService: SoundMakerService) {
    this.soundMakerService.loadSound('../assets/Fiddlesticks_Original_Attack_2 (online-audio-converter.com).mp3');
  }

  ngOnInit(): void {
  }

  playIt = () => {
    this.soundMakerService.playSound();
  };

  move() {
    const btn = document.getElementById('random');
    this.count++;
    if (this.count % 2) {
      btn.style.top = Math.floor((Math.random() * 1000 + 1)) + 'px';
      btn.style.left = Math.floor((Math.random() * 1000 + 1)) + 'px';
    } else {
      btn.style.top = Math.floor((Math.random() * 256 + 1)) + 'px';
      btn.style.left = Math.floor((Math.random() * 256 + 1)) + 'px';
    }
    btn.style.fontSize = 17 + (this.count * 10) + 'px';
    if (this.count === 5) {
      this.playIt();
    }
    if (this.count > 5) {
      btn.style.top = null;
      btn.style.left = null;
      btn.style.fontSize = null;
      this.count = 0;
    }
  }


}
