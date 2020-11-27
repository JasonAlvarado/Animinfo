import { Episode } from './../../models/anime/episodes';
import { Character } from './../../models/anime/animeStaff';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() characters: Character[];
  @Input() episodes: Episode[];

  // @ViewChild('.carousel-inner') slides;

  // TO DO use same declartaion for items
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
    }, 2000);
  }

  ngAfterViewInit() {
    // var sliderItems = document.getElementsByClassName('carousel-item');
    // console.log(sliderItems);
    // console.log(this.slides);
  }
}
