import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  @Input() characters: any[] = [];
  @Output() characterSelected = new EventEmitter<{ id: number, name: string }>();

  selectCharacter(character: any) {
    this.characterSelected.emit({ id: character.id, name: character.name });
  }
}
