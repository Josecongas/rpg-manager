import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CharacterComponent } from './character.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [CharacterComponent],
  exports: [CharacterComponent],
  imports: [CommonModule, MatCardModule, MatProgressBarModule]
})
export class CharacterModule {}
