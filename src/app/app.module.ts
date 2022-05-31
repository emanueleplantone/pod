import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoute } from './app.routes';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    App3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
