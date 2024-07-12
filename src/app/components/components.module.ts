import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { RouletteComponent } from './roulette/roulette.component';
import { CardsComponent } from './cards/cards.component';


import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

//swiper
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [AnimeCardComponent,RouletteComponent,CardsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
  ],
  exports: [AnimeCardComponent,RouletteComponent,CardsComponent]
})
export class ComponentsModule { }
