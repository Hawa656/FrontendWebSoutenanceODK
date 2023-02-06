import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterLegumeFruitComponent } from './ajouter-legume-fruit/ajouter-legume-fruit.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo: 'connexion', pathMatch: 'full'},
  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'ajouter-legume-fruit', component:AjouterLegumeFruitComponent},
  {path:'home', component:HomeComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
