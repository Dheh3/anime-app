import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    //redirectTo: 'login',
    //pathMatch: 'full'
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'anime/:id',
    loadChildren: () => import('./anime/anime/anime.module').then( m => m.AnimePageModule)
  },
  {
    path: 'manga/:id',
    loadChildren: () => import('./manga/manga/manga.module').then( m => m.MangaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register/register.module').then( m => m.RegisterPageModule)
  },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
