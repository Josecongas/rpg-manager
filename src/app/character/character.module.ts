import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharacterComponent } from "./character.component";
import { MaterialModule } from "../core/material/material.module";
@NgModule({
  declarations: [CharacterComponent],
  exports: [CharacterComponent],
  imports: [CommonModule, MaterialModule],
})
export class CharacterModule {}
