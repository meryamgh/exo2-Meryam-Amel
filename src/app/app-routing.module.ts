import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {GestionComponent} from "./gestion/gestion.component";
import {ListComponent} from "./list/list.component";
import {BodyComponent} from "./body/body.component";

const routes: Routes = [
  {path: "form", component: FormComponent},
  {path: "gestion", component:GestionComponent},
  {path : 'Accueil', component: BodyComponent},
  {path : 'Liste', component : ListComponent},
  {path: "**", redirectTo : '/Accueil', pathMatch : 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
