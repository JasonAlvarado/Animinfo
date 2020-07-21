import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit {
  public genres: string[];
  constructor() {
    this.genres = [
      'Action',
      'Adventure',
      'Cars',
      'Comedy',
      'Dementia',
      'Demons',
      'Demons',
      'Mystery',
      'Drama',
      'Ecchi',
      'Fantasy',
      'Game',
      'Hentai',
      'Historical',
      'Horror',
      'Kids',
      'Magic',
      'Martial Arts',
      'Mecha',
      'Music',
      'Parody',
      'Samurai',
      'Romance',
      'School',
      'Sci Fi',
      'Shoujo',
      'Shoujo Ai',
      'Shounen',
      'Shounen Ai',
      'Space',
      'Sports',
      'Super Power',
      'Vampire',
      'Yaoi',
      'Yuri',
      'Harem',
      'Slice Of Life',
      'Supernatural',
      'Military',
      'Police',
      'Psychological',
      'Thriller',
      'Seinen',
      'Josei',
    ];
  }

  ngOnInit(): void {}
}
