import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginModule } from './pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from './services/checkAuth/auth-guard.service';
import { SessionStorageService } from './services/session/session.service';
import { ArticlesModule } from './pages/article/articles.module';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AddOrEditModule } from './pages/article/addOrEdit/addOrEdit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    LoginModule,
    ArticlesModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    AddOrEditModule,
  ],
  providers: [AuthGuard, SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
