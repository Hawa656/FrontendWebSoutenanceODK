import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConseilsService } from '../_services/conseils.service';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.scss']
})
export class ConseilsComponent  implements OnInit {
  conseil: any
  // pour la barre de recherche:
  searchText:any;
   constructor(private conseilService: ConseilsService, private route : Router) { }
 
   ngOnInit() {
      //AFFICHER LES CONSEILS
      this.conseilService.getConseil().subscribe(data=>{
       this.conseil = data;
       console.log(this.conseil)
     })
     
   }
    //LA METHODE PERMETTANT DE NAVIGER VERS LA PAGE DU DETAILS CONSEIL
   goToDetailConseils(id:number){
     return this.route.navigate(['/tabs/details-conseil', id])
   }

}
