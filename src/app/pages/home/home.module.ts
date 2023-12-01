import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerModule } from '../../shared/banner/banner.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BannerModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
