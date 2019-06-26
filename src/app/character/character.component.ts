import { Component, OnInit } from '@angular/core';
import { Character } from '../models/interfaces/character';
import { Characters } from 'backend/character/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public characters: Character[] = Characters;

  constructor() {}

  ngOnInit() {}

  healthDecrease(character: Character) {
    if (character.currentHealth > 0) {
      character.currentHealth--;
    }
  }
  healthIncrease(character: Character) {
    if (character.currentHealth < character.healthPoints) {
      character.currentHealth++;
    }
  }
}
