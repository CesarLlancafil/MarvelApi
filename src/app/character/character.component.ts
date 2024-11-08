import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  @Input() characters: any[] = [];
  @Output() characterSelected = new EventEmitter<number>();

  selectCharacter(characterId: number) {
    this.characterSelected.emit(characterId);
  }
}
