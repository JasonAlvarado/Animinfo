import { SeasonComponent } from './components/season/season.component';
import { Routes, RouterModule } from '@angular/router';

import { AnimeComponent } from './components/anime/anime.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'anime/:id', component: DetailsComponent },
  { path: 'season', component: SeasonComponent },
  { path: '**', component: HomeComponent },
];

export const routing = RouterModule.forRoot(routes);
