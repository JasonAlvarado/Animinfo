import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AnimeService {
  private animeUrl: string;

  constructor(private httpClient: HttpClient) {
    this.animeUrl = 'https://api.jikan.moe/v3/anime/';
  }

  getInfo(id: number): Observable<any> {
    return this.httpClient.get(this.animeUrl + id);
  }

  getCharacters(id: number): Observable<any> {
    let url = this.animeUrl + id + '/characters_staff';

    return this.httpClient.get(url);
  }

  getEpisodes(id: number): Observable<any> {
    let url = this.animeUrl + id + '/episodes';

    return this.httpClient.get(url);
  }

  getNews(id: number): Observable<any> {
    let url = this.animeUrl + id + '/news';

    return this.httpClient.get(url);
  }
}
