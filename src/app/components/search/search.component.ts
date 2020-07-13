import { ActivatedRoute } from '@angular/router';
import { AnimeSearch, AnimeInfo } from '../../models/anime/animeSearch';
import { AnimeService } from './../../services/anime.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [AnimeService],
})
export class SearchComponent implements OnInit {
  public animeSearch: AnimeSearch;
  public searchResults: AnimeInfo[];

  constructor(
    private animeService: AnimeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchAnime();
  }

  searchAnime() {
    this.activatedRoute.params.subscribe((params) => {
      let name = params.name;

      this.animeService.searchByName(name).subscribe(
        (response) => {
          this.animeSearch = response;

          this.searchResults = this.animeSearch.results.sort((a, b) => {
            return b.episodes - a.episodes;
          });
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
}
