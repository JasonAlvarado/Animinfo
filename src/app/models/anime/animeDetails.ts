import { Article } from './article';
import { Episode } from './episodes';
import { Character } from './animeStaff';

export class AnimeDetails {
  public characters: Character[];
  public episodes: Episode[];
  public news: Article[];
}
