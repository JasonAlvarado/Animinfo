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
  public year: number;
  public selectedSeason: string;
  public season: SeasonSearch;
  public seasons: string[];

  constructor(private searchService: SearchService) {
    this.seasons = ['summer', 'spring', 'fall', 'winter'];
    this.year = 2019;
    this.selectedSeason = 'summer';
  }

  ngOnInit(): void {
    this.searchBySeason();
  }

  searchBySeason() {
    this.season = new SeasonSearch(this.year, this.selectedSeason);

    this.searchService.searchSeason(this.season).subscribe(
      (response) => {
        console.log(response.anime);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
