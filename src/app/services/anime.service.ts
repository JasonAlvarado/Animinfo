import { ApiService } from './apiService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AnimeService {
  constructor(private apiService: ApiService) {}

  getInfo(id: number): Observable<any> {
    return this.apiService.get(`/${id}`);
  }

  getCharacters(id: number): Observable<any> {
    return this.apiService.get(`/${id}/characters_staff`);
  }

  getEpisodes(id: number): Observable<any> {
    return this.apiService.get(`/${id}/episodes`);
  }

  getNews(id: number): Observable<any> {
    return this.apiService.get(`/${id}/news`);
  }
}
