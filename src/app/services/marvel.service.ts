import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as md5 from 'md5';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  private getAuthParams() {
    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${environment.marvelPrivateKey}${environment.marvelPublicKey}`);
    return `ts=${timestamp}&apikey=${environment.marvelPublicKey}&hash=${hash}`;
  }

  getCharacters(limit: number = 20, offset: number = 0) {
    return this.http.get(
      `${environment.marvelBaseUrl}/characters?${this.getAuthParams()}&limit=${limit}&offset=${offset}`
    );
  }

  // getComics(characterId: number) {
  //   return this.http.get(
  //     `${environment.marvelBaseUrl}/characters/${characterId}/comics?${this.getAuthParams()}`
  //   );
  // }
  getComics(characterId: number, limit: number, offset: number) {
    return this.http.get(
      `${environment.marvelBaseUrl}/characters/${characterId}/comics?${this.getAuthParams()}&limit=${limit}&offset=${offset}`
    );
  }
}