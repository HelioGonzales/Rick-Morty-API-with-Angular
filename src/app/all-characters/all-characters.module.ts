import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCharactersRoutingModule } from './all-characters-routing.module';
import { AllCharactersComponent } from './component/all-characters/all-characters.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AllCharactersComponent],
  imports: [CommonModule, AllCharactersRoutingModule, MaterialModule],
})
export class AllCharactersModule {}
