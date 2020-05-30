import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';
  activeLinkIndex: number;
  navLinks = [
    {
      label: 'Home',
      path: '/',
      index: 0
    },
    {
      label: 'Evo',
      path: '/evo',
      index: 1
    },
    {
      label: 'Jake',
      path: '/jake',
      index: 2
    }
  ];

  title = 'EvoChan';

  ngOnInit(): void {
    this.activeLinkIndex = 0;
  }

  close() {
    this.sidenav.close();
  }

  // audio = new Audio('../assets/coomer.mp4.mp3');
  // volume = 50;
  // constructor() {
  //   this.audio.load();
  // }
  // onInputChange = (event: MatSliderChange) => {
  //   const elements: any = document.getElementsByClassName('tablink');
  //   this.audio.volume = event.value / 100;
  //   if (elements) {
  //     // tslint:disable-next-line:prefer-for-of
  //     for (let i = 0; i < elements.length; i++) {
  //       if (elements[i].style) {
  //         elements[i].style.fontSize = String(event.value) + 'px';
  //       }
  //     }
  //   }
  // };
  // playAudio() {
  //   this.audio.play();
  // }
  // stopAudio() {
  //   this.audio.pause();
  //}

}
