import { Top } from './../../models/anime/top';
import { AnimeService } from './../../services/anime.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
  providers: [AnimeService],
})
export class AnimeComponent implements OnInit {
  public topAnimes: Top[];
  public animeName: string;

  constructor(private animeService: AnimeService, private router: Router) {}

  ngOnInit(): void {
    this.getTopAnimes();
    this.animeName = '';
  }

  getTopAnimes() {
    this.animeService.getTopAnimes().subscribe(
      (response) => {
        this.topAnimes = response.top;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    console.log('anime name:' + this.animeName);
    this.router.navigate(['/search', this.animeName]);
  }
}
