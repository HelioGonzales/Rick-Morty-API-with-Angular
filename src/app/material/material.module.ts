import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
