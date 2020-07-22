import { SliderModel } from './../../models/slider/sliderModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() title: string;
  @Input() data: SliderModel[];

  public arrays;

  constructor() {
    this.arrays = [];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.spliceArray();
    }, 300);
  }

  spliceArray() {
    let firstItem = this.data;

    while (firstItem.length > 0) {
      this.arrays.push(firstItem.splice(0, 12));
    }
  }
}
