import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

@NgModule({
  declarations: [AppComponent, BanerComponent, PersonalInformationComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
