import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  fruit: any
  searchText:any;

  constructor(private legumeFruitService: LegumeFruitService, private route: Router) { }
  ngOnInit(){

    //AFFICHER LES  FRUITS
    this.tousLesFruits()
   
  }

  //LA METHODE PERMETTANT DE NAVIGER VERS LA PAGE DU DETAILS FRUIT
  goToDetailFruit(id:number){
    return this.route.navigate(['/legume-fruit-fruit', id])
  }

//================================================ suprimer ===================

openModal(nom : any, id : number) {
  Swal.fire({
    title: nom,
    text: " Voulez-vous vraiment supprimer ce fruit ? ",
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
        this.tousLesFruits()

      console.log(id)
      Swal.fire(
        'Supprimer!',
        'supprimé avec succès'
      );
    });

    }
  });
}
tousLesFruits(){
  //AFFICHER LES LEGUMES 
  this.legumeFruitService.getFruit().subscribe(data=>{
    this.fruit = data;
    console.log(this.fruit)
  })
}
}

  


