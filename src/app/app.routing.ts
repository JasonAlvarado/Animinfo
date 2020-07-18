import { Routes, RouterModule } from '@angular/router';

import { AnimeComponent } from './components/anime/anime.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';
import { MangaComponent } from './components/manga/manga.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:name', component: SearchComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'anime/:id', component: DetailsComponent },
  { path: 'manga', component: MangaComponent },
  { path: '**', component: HomeComponent },
];

export const routing = RouterModule.forRoot(routes);
