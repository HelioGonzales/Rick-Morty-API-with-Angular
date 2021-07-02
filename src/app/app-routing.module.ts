import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-characters',
        pathMatch: 'full',
      },
      {
        path: 'all-characters',
        loadChildren: () =>
          import('./all-characters/all-characters.module').then(
            (m) => m.AllCharactersModule
          ),
      },
      {
        path: 'search/:search',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'character-detail/:id',
        loadChildren: () =>
          import('./character-detail/character-detail.module').then(
            (m) => m.CharacterDetailModule
          ),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('./favorites/favorites.module').then((m) => m.FavoritesModule),
      },
    ],
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
