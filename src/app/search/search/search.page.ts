import { Component, OnInit } from '@angular/core';
import { JikanService } from 'src/app/api/jikan.service';

import { ActivatedRoute } from '@angular/router';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit{
 
  @ViewChild('infiniteScroll', { static: false }) infiniteScroll!: IonInfiniteScroll;

  searchQuery: string = '';
  results: any;
  resultado = [];
  page = 1;
  loading = false;

  constructor(
    private jikanService: JikanService,
    private activatedRoute: ActivatedRoute
  ) { this.activatedRoute.snapshot.paramMap.get('id')}

  ngOnInit() {
    
  }

  search(event: any) {
    this.searchQuery = event.detail.value;
    this.results = [];
    this.loadMore(true);
  }

  loadMore(newSearch: boolean = false) {
    if (this.loading) {
      return;
    }
    this.loading = true;

    setTimeout(() => {
      this.jikanService.searchAnime(this.searchQuery, newSearch).subscribe(res => {
        this.results = [...this.results, ...res.data]; 

        this.loading = false;

        setTimeout(() => {
          if (this.infiniteScroll) {
            this.infiniteScroll.complete();
          }
        }, 1000);

      });
    }, 1000);
  }

}
