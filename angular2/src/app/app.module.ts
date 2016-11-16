import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogbookComponent } from './component/logbook/logbook.component';
import { LoginComponent } from './component/login/login.component';
import { LogDetailComponent } from './component/logdetail/log-detail.component';

import { LogbookService } from './service/logbook.service';
import { LoginService } from './service/login.service';
import { SharedService } from './service/shared.service';

import { Url } from './model/url';


@NgModule({
  declarations: [
    AppComponent,
    LogbookComponent,
    LoginComponent,
    LogDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    LogbookService,
    SharedService,
    Url
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
