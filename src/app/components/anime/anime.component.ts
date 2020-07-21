import { AnimeSearchRequest } from './../../models/search/animeSearch';
import { Anime } from './../../models/anime/top';
import { Component, OnInit } from '@angular/core';
import { AnimeService } from './../../services/anime.service';
import { SearchService } from './../../services/searchService';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
  providers: [AnimeService, SearchService],
})
export class AnimeComponent implements OnInit {
  public animes: Anime[];
  public status: string[];

  public animeRequest: AnimeSearchRequest;

  constructor(private searchService: SearchService) {
    this.status = ['airing', 'completed', 'to_be_aired'];

    this.animeRequest = new AnimeSearchRequest('', '', '');
  }

  ngOnInit(): void {
    this.searchTopAnimes();
  }

  searchTopAnimes() {
    this.searchService.searchTopAnimes().subscribe(
      (response) => {
        this.animes = response.top;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    this.searchService.searchAnime(this.animeRequest).subscribe(
      (response) => {
        this.animes = response.results;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
