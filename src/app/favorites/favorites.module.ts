import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, FavoritesRoutingModule, MaterialModule],
  exports: [FavoritesComponent],
})
export class FavoritesModule {}
