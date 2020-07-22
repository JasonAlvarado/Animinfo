// export class Anime {
//   mal_id: number;
//   rank: number;
//   title: string;
//   url: string;
//   image_url: string;
//   type: string;
//   episodes?: number;
//   start_date: string;
//   end_date: string;
//   members: number;
//   score: number;
// }

export class Anime {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  mal_id: number;
  rank: number;
  title: string;
  url: string;
  image_url: string;
  trailer_url: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  status: string;
  airing: boolean;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  popularity: number;
  episodes?: number;
  start_date: string;
  end_date: string;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  premiered: string;
  broadcast: string;
  opening_themes: string[];
  ending_themes: string[];
}
