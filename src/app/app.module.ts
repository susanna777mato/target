import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StructurComponent } from './components/structur/structur.component';
import { FinalComponent } from './components/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StructurComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
