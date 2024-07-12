import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimePageRoutingModule } from './anime-routing.module';

import { AnimePage } from './anime.page';

//swiper
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimePageRoutingModule
  ],
  declarations: [AnimePage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AnimePageModule {}
