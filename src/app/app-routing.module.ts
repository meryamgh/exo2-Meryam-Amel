import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from "./component/form/form.component";
import {GestionComponent} from "./component/gestion/gestion.component";
import {ListComponent} from "./component/list/list.component";
import {BodyComponent} from "./component/body/body.component";

const routes: Routes = [
  {path: "form", component: FormComponent},
  {path: "gestion", component: GestionComponent},
  {path: 'Accueil', component: BodyComponent},
  {path: 'Liste', component: ListComponent},
  {path: "**", redirectTo: '/Accueil', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
