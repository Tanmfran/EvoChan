import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import {NgbDropdown} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-baseheader',
  templateUrl: './baseheader.component.html',
  styleUrls: ['./baseheader.component.css']
})
export class BaseheaderComponent implements OnInit {
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
  count = 0;
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
  valorant = {
    label: 'Valorant',
    path: '/valorant'
  };
  title = 'EvoChan';
  ngOnInit(): void {
    this.activeLinkIndex = 0;
  }

  onHomePress = () => {
    this.selectedFriend = 'Friends';
    this.count = 0;
    const btn = document.getElementById('random');
    btn.style.top = null;
    btn.style.left = null;
    btn.style.fontSize = null;
  }

  close = () => {
    this.sidenav.close();
    this.dropdown.close();
  }

}

