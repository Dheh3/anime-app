import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAnimeFull,IAnimeCharacter } from '@shineiichijo/marika';
import { JikanService } from 'src/app/api/jikan.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {
  public anime!: IAnimeFull;
  public character!: IAnimeCharacter[];

  private animeId!: number;

  showFullText = false;

  constructor(
    private jikanService: JikanService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    try {
      this.animeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      setTimeout(async () => {
        this.anime = await this.jikanService.getAnime(this.animeId);
        this.character = await this.jikanService.getAnimeCharacters(this.animeId);
        console.log(this.anime);
        console.log(this.character);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }
  
  swiperSliderChanged(e: any) {
    console.log('changed: ', e);
  }
  
}
