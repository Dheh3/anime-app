import { Component, OnInit } from '@angular/core';

import { IAnimeSeasonNow } from 'src/app/models/SeasonAnimeModel';
import { JikanService } from 'src/app/api/jikan.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss'],
})
export class RouletteComponent implements OnInit {

  public airingAnime!: IAnimeSeasonNow;
  public favAnime!: IAnimeSeasonNow;
  public gMovie!: IAnimeSeasonNow;
  public topAnime!: IAnimeSeasonNow;

  constructor(private jikanService: JikanService) { }

  async ngOnInit() {
    this.favAnime = await this.jikanService.getFavorites();
    
    setTimeout(async () => {
      this.gMovie = await this.jikanService.getMovies();
      this.topAnime = await this.jikanService.getTop();
    }, 1000);
    setTimeout(async () => {
      this.airingAnime = await this.jikanService.getAiringManga();
    }, 2000);
    console.log(this.airingAnime,this.favAnime);
  }
  
  swiperSliderChanged(e: any) {
    console.log('changed: ', e);
  }
}
