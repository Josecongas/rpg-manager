import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  background: string = '../../assets/map1.png';

  constructor() {}

  ngOnInit() {
    this.setImage(this.background);
  }

  setImage(background: string) {
    const map = document.getElementById('map');
  }
}
