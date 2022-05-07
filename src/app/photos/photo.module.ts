import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [PhotoComponent],
  imports: [HttpClientModule],
  exports: [PhotoComponent],
})
export class PhotoModule {}
