import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AnimeComponent } from './components/anime/anime.component';
import { SeasonComponent } from './components/season/season.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent, AnimeComponent, SeasonComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
