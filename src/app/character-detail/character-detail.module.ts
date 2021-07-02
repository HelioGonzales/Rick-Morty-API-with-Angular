import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule,
    MaterialModule
  ]
})
export class CharacterDetailModule { }
