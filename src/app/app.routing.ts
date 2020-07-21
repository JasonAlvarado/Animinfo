import { Routes, RouterModule } from '@angular/router';

import { AnimeComponent } from './components/anime/anime.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SeasonComponent } from './components/season/season.component';
import { GenreComponent } from './components/genre/genre.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'anime/:id', component: DetailsComponent },
  { path: 'season', component: SeasonComponent },
  { path: 'genre', component: GenreComponent },
  { path: '**', component: ErrorComponent },
];

export const routing = RouterModule.forRoot(routes);
