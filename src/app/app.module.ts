import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NamesearchComponent } from './components/namesearch/namesearch.component';
import { LikesComponent } from './components/likes/likes.component';
// Services
import { PeopleService } from './services/people.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NamesearchComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
