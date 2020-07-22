import { SearchService } from './../../services/searchService';
import { Component, OnInit } from '@angular/core';
import { GenreList } from './../../models/search/genreList';
import { Anime } from './../../models/anime/anime';
import { Genre } from './../../models/search/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
  providers: [SearchService],
})
export class GenreComponent implements OnInit {
  public animes: Anime[];
  public genres: Genre[];
  public pageNumber: number;
  public selected: number;

  constructor(private searchService: SearchService) {
    this.genres = GenreList;
    this.selected = 1;
    this.pageNumber = 1;
  }

  ngOnInit(): void {}

  onSubmit() {
    this.searchService.searchByGenre(this.selected, this.pageNumber).subscribe(
      (response) => {
        this.animes = response.anime;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
