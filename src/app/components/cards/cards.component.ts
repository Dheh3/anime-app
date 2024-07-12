import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  swiperSliderChanged(e: any) {
    console.log('changed: ', e);
  }
}
