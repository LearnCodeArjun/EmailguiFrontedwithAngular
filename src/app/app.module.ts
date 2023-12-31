import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatButtonModule} from "@angular/material/button"
import {MatButtonModule} from "@angular/material/button"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon";
import { EmailComponent } from './component/email/email.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { EmailService } from './service/email.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   // MatButtonModule
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatFormFieldModule,
   MatInputModule,
   FormsModule,
   HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    EmailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
