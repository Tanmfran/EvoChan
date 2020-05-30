import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {
    this.selectedFriend = this.navLinks.find(x => x.path === this.router.url).label;
    if (this.selectedFriend === 'Home') {
      this.selectedFriend = 'Friends';
    }
  }
  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('NgbDropdown') dropdown: NgbDropdown;
  selectedFriend = 'Friends';
  activeLinkIndex: number;
  home = {
    label: 'Home',
    path: '/',
    index: 0,
  };
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

  friends = [
    {
      label: 'Evo',
      path: '/evo',
      index: 1
    },
    {
      label: 'Jake',
      path: '/jake',
      index: 2
    },
    {
      label: 'Stephen',
      path: '/stephen',
      index: 3
    },
    {
      label: 'Tannor',
      path: '/tannor',
      index: 4
    },
    {
      label: 'Vance',
      path: '/vance',
      index: 5
    },
    {
      label: 'Amie',
      path: '/amie',
      index: 6
    }
  ];

  title = 'EvoChan';
  ngOnInit(): void {
    this.activeLinkIndex = 0;
  }

  close() {
    this.sidenav.close();
    this.dropdown.close();
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
