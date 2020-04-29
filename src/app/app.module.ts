import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HasilComponent } from './hasil/hasil.component';

const ROUTES = [
  {path: 'kalkulator', component : AppComponent},
  {path: 'hasil', component : HasilComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, HasilComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
