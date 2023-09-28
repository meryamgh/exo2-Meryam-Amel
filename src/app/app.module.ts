import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormComponent } from './component/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GestionComponent } from './component/gestion/gestion.component';
import {ListComponent} from "./component/list/list.component";
import {HeaderComponent} from "./component/header/header.component";
import {BodyComponent} from "./component/body/body.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormComponent,
    GestionComponent,
    BodyComponent,
    HeaderComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
