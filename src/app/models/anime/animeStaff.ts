export class VoiceActor {
  mal_id: number;
  name: string;
  url: string;
  image_url: string;
  language: string;
}

export class Character {
  mal_id: number;
  url: string;
  image_url: string;
  name: string;
  role: string;
  voice_actors: VoiceActor[];
}

export class Staff {
  mal_id: number;
  url: string;
  name: string;
  image_url: string;
  positions: string[];
}

export class AnimeStaff {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  characters: Character[];
  staff: Staff[];
}
