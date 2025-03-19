import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsModule } from './UI/students/students.module';
import { HttpClientModule } from '@angular/common/http';
import { CoursesModule } from './UI/courses/courses.module';
import { InscriptionsModule } from './UI/inscriptions/inscriptions.module';
import { NavBarComponent } from './UI/shared/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    HttpClientModule,
    CoursesModule,
    InscriptionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
