import { Anime } from './../../models/anime/anime';
import { SearchService } from './../../services/searchService';
import { SeasonSearch } from './../../models/search/seasonSearch';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css'],
  providers: [SearchService],
})
export class SeasonComponent implements OnInit {
  public season: SeasonSearch;
  public seasons: string[];
  public animes: Anime[];

  constructor(private searchService: SearchService) {
    this.seasons = ['summer', 'spring', 'fall', 'winter'];
    this.season = new SeasonSearch(2018, 'summer');
  }

  ngOnInit(): void {
    this.searchBySeason();
  }

  searchBySeason() {
    this.searchService.searchSeason(this.season).subscribe(
      (response) => {
        this.animes = response.anime;
        console.log(this.animes);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
