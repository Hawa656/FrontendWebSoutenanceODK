import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.component.html',
  styleUrls: ['./legumes.component.scss']
})
export class LegumesComponent implements OnInit{

  legume : any
  id:any
  // pour la barre de recherche:
  searchText:any;
 
  constructor(private legumeFruitService: LegumeFruitService, private route : Router) { }

  ngOnInit() {
    this.tousLesLegumes()
    // this.legumeFruitService.supprimerLegumesFruits(this.id)
  }

  //LA METHODE PERMETTANT DE SUPPRIMER UN FRUIT OU LEGUME
  supprimerLegumesFruits(id:number){
    return this.route.navigate(['/tabs/legume-fruit', id])
  }

  //================================================ suprimer ===================

  openModal(nom : any, id : number) {
    Swal.fire({
      title: nom,
      text: " Voulez-vous vraiment supprimer ce legume ? ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#399C28',
      cancelButtonColor: '#d33',
      cancelButtonText : "NON",
      confirmButtonText: 'OUI'
    }).then((result) => {
      if (result.isConfirmed) {
        //suppp
        this.legumeFruitService.supprimerLegumesFruits(id).subscribe(data => {
          this.tousLesLegumes()

        console.log(id)
        Swal.fire(
          'Supprimer!',
          'supprimé avec succès'
        );
      });

      }
    });
  }

// ========================================== RECUPERATION DE TOUS LES LEGUMES

tousLesLegumes(){
    //AFFICHER LES LEGUMES 
    this.legumeFruitService.getLegume().subscribe(data=>{
      this.legume = data;
      console.log(this.legume)
    })
}
}
