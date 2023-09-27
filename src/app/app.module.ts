import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GestionComponent } from './gestion/gestion.component';
import {ListComponent} from "./list/list.component";
import {HeaderComponent} from "./header/header.component";
import {BodyComponent} from "./body/body.component";
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
