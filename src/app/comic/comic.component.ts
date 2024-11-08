import { Component, OnInit, ViewChild } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
})
export class ComicComponent implements OnInit {
  characters: any[] = [];
  comics: any[] = [];
  totalCharacters: number = 0;
  totalComics: number = 0;
  limit: number = 20;
  limitComics: number = 10;
  selectedCharacterId: number | null = null;
  selectedCharacterName: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('comicsPaginator') comicsPaginator!: MatPaginator;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(offset: number = 0) {
    this.marvelService.getCharacters(this.limit, offset).subscribe((data: any) => {
      this.characters = data.data.results;
      this.totalCharacters = data.data.total;
    });
  }

  fetchComics(characterId: number, offset: number = 0) {
    this.marvelService.getComics(characterId, this.limitComics, offset).subscribe((data: any) => {
      this.comics = data.data.results;
      this.totalComics = data.data.total;
    });
  }

  onPageChange(event: any) {
    const offset = event.pageIndex * this.limit;
    this.fetchCharacters(offset);
  }

  onComicsPageChange(event: any) {
    const offset = event.pageIndex * this.limitComics;
    if (this.selectedCharacterId) {
      this.fetchComics(this.selectedCharacterId, offset);
    }
  }

  onCharacterSelected(character: { id: number, name: string }) {
    this.selectedCharacterId = character.id;
    this.selectedCharacterName = character.name;
    this.fetchComics(this.selectedCharacterId);
    // this.marvelService.getComics(this.selectedCharacterId).subscribe((data: any) => {
    //   this.comics = data.data.results;
    // });
  }
}
