import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainServiceService } from './service/main-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], providers: [
    MainServiceService
  ]
})
export class CoreModule { }
