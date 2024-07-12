import { Component, OnInit } from '@angular/core';
import { IAnimeSeasonNow } from 'src/app/models/SeasonAnimeModel';
import { JikanService } from 'src/app/api/jikan.service';


@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
})
export class AnimeCardComponent implements OnInit {
  
  public airingAnime!: IAnimeSeasonNow;

  constructor(private jikanService: JikanService) { }
  
  async ngOnInit(){
    this.airingAnime = await this.jikanService.getAiringanime();
    console.log(this.airingAnime);
  }

  swiperSliderChanged(e:any){
    console.log('changed: ', e);
  }
  
}
