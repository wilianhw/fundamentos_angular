import { FilterByDescriptionPipe } from './photo-list/photos/filter-by-description.pipe';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
  declarations: [FilterByDescriptionPipe, PhotoComponent, PhotoFormComponent, PhotoListComponent, PhotosComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PhotoListComponent],
})
export class PhotoModule {}
