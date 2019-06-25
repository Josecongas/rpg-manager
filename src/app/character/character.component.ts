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
      strength: 49,
      dexterity: 32,
      power: 39,
      knowledge: 78,
      appearance: 91,
      education: 81,
      size: 51,
      intelect: 65,
      avatar: '../../assets/img/zulrak.jpg',
      currentHealth: 43
    },
    {
      name: 'Kundox',
      healthPoints: 90,
      strength: 78,
      dexterity: 56,
      power: 78,
      knowledge: 33,
      appearance: 67,
      education: 50,
      size: 97,
      intelect: 65,
      avatar: '../../assets/img/kundox.jpg',
      currentHealth: 32
    },
    {
      name: 'Kennedian',
      healthPoints: 43,
      strength: 54,
      dexterity: 67,
      power: 52,
      knowledge: 51,
      appearance: 76,
      education: 61,
      size: 39,
      intelect: 65,
      avatar: '../../assets/img/outlander.jpg',
      currentHealth: 37
    },
    {
      name: 'Fanrisa',
      healthPoints: 56,
      strength: 34,
      dexterity: 56,
      power: 43,
      knowledge: 82,
      appearance: 95,
      education: 79,
      size: 35,
      intelect: 91,
      avatar: '../../assets/img/mage.jpg',
      currentHealth: 25
    },
    {
      name: 'Hawkrager',
      healthPoints: 56,
      dexterity: 86,
      strength: 76,
      power: 62,
      knowledge: 43,
      appearance: 34,
      education: 32,
      size: 73,
      intelect: 75,
      avatar: '../../assets/img/berserker.jpg',
      currentHealth: 12
    }
  ];

  constructor() {}

  ngOnInit() {}
}
