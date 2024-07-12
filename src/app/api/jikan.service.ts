import { Injectable } from '@angular/core';
import { IAnimeSeasonNow } from '../models/SeasonAnimeModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//--
import { Anime,IAnimeFull,IManga,Manga, Characters, IAnimeCharacter} from '@shineiichijo/marika';


@Injectable({
  providedIn: 'root'
})
export class JikanService {
  //--marika
  animeClient = new Anime();
  characterClient = new Characters();

  mangaClient = new Manga();
  //--marika

  private baseUrl = "https://api.jikan.moe/v4/";
  private params = "&order_by=popularity&sfw=false&type=tv";
  private paramsM = "&order_by=popularity&sfw=true";
  private popular = "top/anime?type=tv&filter=bypopularity"
  private movie = "top/anime?type=movie&filter=favorite"
  private upcoming = "seasons/upcoming"
  public page:number = 1; 

  constructor(private http: HttpClient) { }

  //marika-anime
  public async getAnime(id:number): Promise<IAnimeFull>{
    return await this.animeClient.getAnimeFullById(id);
  }

  //marika-characters
  public async getAnimeCharacters(id: number): Promise<IAnimeCharacter[]>{
    return await this.animeClient.getAnimeCharacters(id);
  }

  //marika-manga
  public async getManga(id:number): Promise<IManga>{
    return await this.mangaClient.getMangaById(id);
  }
  //marika
  
  public async getAiringanime(): Promise<IAnimeSeasonNow> {
    return await fetch(`${this.baseUrl}anime?q=&${this.params}&status=airing`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  public async getAiringManga(): Promise<IAnimeSeasonNow> {
    return await fetch(`${this.baseUrl}manga?q=&${this.paramsM}&status=publishing`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  public async getFavorites(): Promise<IAnimeSeasonNow> {
    return await fetch(`${this.baseUrl}${this.popular}`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  public async getMovies(): Promise<IAnimeSeasonNow> {
    return await fetch(`${this.baseUrl}${this.movie}`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  public async getTop(): Promise<IAnimeSeasonNow> {
    return await fetch(`${this.baseUrl}${this.upcoming}`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }
  
  searchAnime(query: string, newSearch: boolean = false): Observable<any> {
    if (newSearch) {
      this.page = 1;
    }
    let response = this.http.get(`${this.baseUrl}anime?q=${query}${this.params}&page=${this.page}`);
    this.page++;
    return response;
  }

}