import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  declarations: [PhotoComponent, PhotoFormComponent, PhotoListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PhotoListComponent],
})
export class PhotoModule {}
