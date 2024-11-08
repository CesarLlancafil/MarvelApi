import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
})
export class ComicComponent implements OnInit {
  characters: any[] = [];
  selectedCharacterId: number | null = null;
  comics: any[] = [];

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe((data: any) => {
      this.characters = data.data.results;
    });
  }

  onCharacterSelected(characterId: number) {
    this.selectedCharacterId = characterId;
    this.marvelService.getComics(characterId).subscribe((data: any) => {
      this.comics = data.data.results;
    });
  }
}
