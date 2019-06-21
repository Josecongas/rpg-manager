import { Component, OnInit } from '@angular/core';
import { Character } from '../models/interfaces/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public characters: Character[] = [
    {
      name: 'Zulrak',
      healthPoints: 67,
      strenght: 49,
      intelect: 65,
      avatar: '../../assets/img/zulrak.jpg'
    },
    {
      name: 'Kundox',
      healthPoints: 90,
      strenght: 78,
      intelect: 65,
      avatar: '../../assets/img/kundox.jpg'
    },
    {
      name: 'Kennedian',
      healthPoints: 43,
      strenght: 54,
      intelect: 65,
      avatar: '../../assets/img/outlander.jpg'
    },
    {
      name: 'Fanrisa',
      healthPoints: 2,
      strenght: 34,
      intelect: 91,
      avatar: '../../assets/img/mage.jpg'
    },
    {
      name: 'Hawkrager',
      healthPoints: 56,
      strenght: 46,
      intelect: 75,
      avatar: '../../assets/img/berserker.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
