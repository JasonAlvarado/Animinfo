import { SliderModel } from './../../models/slider/sliderModel';
import { AnimeDetails } from './../../models/anime/animeDetails';
// import { Article } from './../../models/anime/article';
// import { Episode } from './../../models/anime/episodes';
// import { Character } from './../../models/anime/animeStaff';
import { Anime } from './../../models/anime/anime';
import { AnimeService } from './../../services/anime.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [AnimeService],
})
export class DetailsComponent implements OnInit {
  public animeId: number;
  public anime: Anime;
  public animeDetails: AnimeDetails;
  public characters: SliderModel[];
  public episodes: SliderModel[];

  public pageSection: string;

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute
  ) {
    this.characters = [];
    this.animeDetails = new AnimeDetails();
    this.pageSection = 'Characters';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.animeId = params.id;
    });

    this.getInfo();
    this.getCharacters();
    // this.getEpisodes();
    this.getNews();
  }

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

  getNews() {
    this.animeService.getNews(this.animeId).subscribe(
      (response) => {
        this.animeDetails.news = response.articles.slice(0, 6);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getCharacters() {
    this.animeService.getCharacters(this.animeId).subscribe(
      (response) => {
        this.animeDetails.characters = response.characters;

        this.animeDetails.characters.forEach((element) => {
          this.characters.push(
            new SliderModel(
              element.mal_id,
              element.name,
              element.url,
              element.image_url
            )
          );
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getEpisodes() {
    this.animeService.getEpisodes(this.animeId).subscribe(
      (response) => {
        this.animeDetails.episodes = response.episodes;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
