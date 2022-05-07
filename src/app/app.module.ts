import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { AppRoutingModule } from "./app.routing.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PhotoModule } from "./photos/photo.module";

@NgModule({
  declarations: [AppComponent],
  imports: [PhotoModule, BrowserModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
