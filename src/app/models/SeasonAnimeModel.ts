import { IAnime } from "@shineiichijo/marika";

export interface IAnimeSeasonNow {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
  data: IAnime[];
}

export interface IAnimeSeason {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      has_next_page: boolean;
    };
  };
  data: IAnime[];
  
}

export interface IAnimeSearch {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      has_next_page: boolean;
    };
  };
  data: IAnime[];
}

export type TMethods =
  | 'anime'
  | 'manga'
  | 'characters'
  | 'random'
  | 'top'
  | 'seasons';

export type TSeasons = 'winter' | 'spring' | 'summer' | 'fall';

export interface Anime {
  mal_id: number;
  url: string;

  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];

  source: string;
  episodes: number;

  airing: boolean;

  score: number;
  scored_by: number;
  rank: number;
  popularity: number;

  synopsis: string;
  background: string;

  year: number;

}
