import { Episode } from './../../models/anime/episodes';
import { Character } from './../../models/anime/animeStaff';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() characters: Character[];
  @Input() episodes: Episode[];

  public characterArray: any[];
  public episodeArray: any[];

  constructor() {
    this.characterArray = [];
    this.episodeArray = [];
  }

  ngOnInit(): void {
    setTimeout(() => {
      while (this.characters.length > 0) {
        this.characterArray.push(this.characters.splice(0, 12));
      }

      while (this.episodes.length > 0) {
        this.episodeArray.push(this.episodes.splice(0, 12));
      }
    }, 1200);
  }
}
