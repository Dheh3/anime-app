import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IManga } from '@shineiichijo/marika';
import { JikanService } from 'src/app/api/jikan.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.page.html',
  styleUrls: ['./manga.page.scss'],
})
export class MangaPage implements OnInit {
  public manga!: IManga;
  private mangaId!: number
  showFullText = false;

  constructor(
    private jikanService: JikanService,
    private activatedRoute:ActivatedRoute
  ) { }

  async ngOnInit() {
    try {
      this.mangaId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      setTimeout(async () => {
        this.manga = await this.jikanService.getManga(this.mangaId);
        console.log(this.manga);
      }, 4000);
    } catch (error) {
      console.error(error);
    }
  }

}
