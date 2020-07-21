import { Anime } from './../../models/anime/anime';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  @Input() animes: Anime[];

  constructor() {}

  ngOnInit(): void {}
}
