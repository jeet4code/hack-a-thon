import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCaptureComponent } from './common/components/image-capture/image-capture.component';
import { ImageProcessComponent } from './common/components/image-process/image-process.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent},
  { path: "products", component: ProductsComponent},
  { path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
