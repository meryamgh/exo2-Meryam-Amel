import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {AppComponent} from "./app.component";
import {GestionComponent} from "./gestion/gestion.component";

const routes: Routes = [
  {path: "form", component: FormComponent},
  {path: "gestion", component:GestionComponent},
  {path: "**", component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
