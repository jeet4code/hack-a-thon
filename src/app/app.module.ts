import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCaptureComponent } from './common/components/image-capture/image-capture.component';
import { ImageProcessComponent } from './common/components/image-process/image-process.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserInfoComponent } from './common/components/user-info/user-info.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImageCaptureComponent,
    ImageProcessComponent,
    ProductsComponent,
    UserInfoComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
