import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { CharacterComponent } from './character/character.component';
import { MarvelService } from './services/marvel.service';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
