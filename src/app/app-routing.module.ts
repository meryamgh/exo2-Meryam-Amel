import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {ListComponent} from "./list/list.component";
import {GestionComponent} from "./gestion/gestion.component";

const routes: Routes = [
  {path : 'Accueil', component: BodyComponent},
  {path : '', redirectTo : '/Accueil', pathMatch : 'full'},
  {path : 'Liste', component : ListComponent},
  {path : 'Gestion', component : GestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
