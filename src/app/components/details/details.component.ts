import { Article } from './../../models/anime/article';
import { Episode } from './../../models/anime/episodes';
import { AnimeStaff, Character } from './../../models/anime/animeStaff';
import { Anime } from './../../models/anime/anime';
import { AnimeService } from './../../services/anime.service';
import { AnimeInfo } from '../../models/anime/animeSearch';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [AnimeService],
})
export class DetailsComponent implements OnInit {
  public animeId: number;
  public anime: Anime;
  public characters: Character[];
  public episodes: Episode[];
  public articles: Article[];

  constructor(
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.animeId = params.id;

      this.getInfo();
      this.getCharacters();
      this.getEpisodes();
      this.getNews();
    });
  }

  ngOnInit(): void {}

  getInfo() {
    this.animeService.getInfo(this.animeId).subscribe(
      (response) => {
        this.anime = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getCharacters() {
    this.animeService.getCharacters(this.animeId).subscribe(
      (response) => {
        this.characters = response.characters.slice(0, 8);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getEpisodes() {
    this.animeService.getEpisodes(this.animeId).subscribe(
      (response) => {
        this.episodes = response.episodes.slice(0, 5);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getNews() {
    this.animeService.getNews(this.animeId).subscribe(
      (response) => {
        console.log(response);
        this.articles = response.articles.slice(0, 5);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
