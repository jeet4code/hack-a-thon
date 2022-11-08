import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageProcessComponent } from './common/components/image-process/image-process.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserInfoComponent } from './common/components/user-info/user-info.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCaptureComponent } from './common/components/image-capture/image-capture.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCaptureComponent,
    ImageProcessComponent,
    LandingPageComponent,
    ProductsComponent,
    UserInfoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
