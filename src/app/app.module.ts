import { ApiService } from './services/apiService';
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
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { GenreComponent } from './components/genre/genre.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent, AnimeComponent, SeasonComponent, AnimeListComponent, HeaderComponent, FooterComponent, ErrorComponent, GenreComponent, SliderComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, routing],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
