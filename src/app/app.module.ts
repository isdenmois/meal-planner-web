import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthModule } from 'pages/auth'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FirebaseModule } from './firebase/firebase.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FirebaseModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
