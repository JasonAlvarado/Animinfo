export class AnimeInfo {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date?: Date;
  end_date?: Date;
  members: number;
  rated: string;
}

export class AnimeSearch {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  results: AnimeInfo[];
  last_page: number;
}
