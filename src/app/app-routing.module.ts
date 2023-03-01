import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterLegumeFruitComponent } from './ajouter-legume-fruit/ajouter-legume-fruit.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { LegumesComponent } from './legumes/legumes.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FruitsComponent } from './fruits/fruits.component';
import { ConseilsComponent } from './conseils/conseils.component';
import { UsersComponent } from './users/users.component';
import { AjoutTutorielComponent } from './ajout-tutoriel/ajout-tutoriel.component';
import { AjoutEtapeComponent } from './ajout-etape/ajout-etape.component';
import { LegumedetailsComponent } from './legumedetails/legumedetails.component';
import { ForumComponent } from './forum/forum.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { ModifierlegumefruitComponent } from './modifierlegumefruit/modifierlegumefruit.component';

const routes: Routes = [
  {path:'', redirectTo: 'connexion', pathMatch: 'full'},
  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'ajouter-legume-fruit', component:AjouterLegumeFruitComponent},
  {path:'home', component:HomeComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'videos', component:VideosComponent},
  {path:'legumes', component:LegumesComponent},
  {path:'fruits', component:FruitsComponent},
  {path:'conseils', component:ConseilsComponent},
  {path:'users', component:UsersComponent},
  {path:'ajout-tutoriel', component:AjoutTutorielComponent},
  {path:'etape', component:AjoutEtapeComponent},
  {path:'legumedetails', component:LegumedetailsComponent},
  {path:'forum', component:ForumComponent},
  {path:'forum-detail/:id', component:ForumDetailComponent},
  {path:'modifierlegumefruit/:id', component:ModifierlegumefruitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
