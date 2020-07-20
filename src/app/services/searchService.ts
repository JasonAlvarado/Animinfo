import { AnimeSearchRequest } from './../models/search/animeSearch';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeasonSearch } from '../models/search/seasonSearch';

@Injectable()
export class SearchService {
  private globalUrl: string;
  constructor(private httpClient: HttpClient) {
    this.globalUrl = 'https://api.jikan.moe/v3/';
  }

  searchTopAnimes(): Observable<any> {
    let url = this.globalUrl + 'top/anime';

    return this.httpClient.get(url);
  }

  searchAnime(animeSearch: AnimeSearchRequest): Observable<any> {
    let url: string = this.globalUrl + 'search/anime?q=' + animeSearch.name;

    if (animeSearch.type != null) {
      url += '&type=' + animeSearch.type;
    }
    if (animeSearch.status != null) {
      url += '&status=' + animeSearch.status;
    }

    console.log('complete url: ' + url);

    return this.httpClient.get(url);
  }

  searchSeason(season: SeasonSearch): Observable<any> {
    let url = this.globalUrl + 'season/' + season.year + '/' + season.name;

    return this.httpClient.get(url);
  }
}
