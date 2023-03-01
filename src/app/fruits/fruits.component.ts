import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import {MatDialog} from '@angular/material/dialog';
import { AjoutTutorielComponent } from '../ajout-tutoriel/ajout-tutoriel.component';
import { AjoutEtapeComponent } from '../ajout-etape/ajout-etape.component';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  fruit: any
  searchText:any;

  tuto:any
  tutos:any
  idLegume: any;
  types: any;
  roles: string[] = [];

  User: any;

 
  form: any = {
    nom: null,
    description: null,
    arrosage: null,
    periodeNormal: null,
    dureeFloraison: null,

    
    type: null,
    idTuto:null
  };
  
  
  file: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  legume: any;
  id: any;
  // pour la barre de recherche:
 

  getLegumeId(id:number){
    this.idLegume=id
  }
  constructor(public dialog1: MatDialog,public dialog: MatDialog,private legumeFruitService: LegumeFruitService, private route: Router,private storageService: StorageService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AjoutTutorielComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    
  }

  openDialog1() {
    const dialogRef = this.dialog1.open(AjoutEtapeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result Etape: ${result}`);
    });
  }
  ngOnInit(){
    this.User = this.storageService.getUser();
    this.getTuto()
    this.legumeFruitService.GetTypeLegumeFruit().subscribe(data => {
      this.types = data;
      console.log(this.types)
    })

    //AFFICHER LES  FRUITS
    this.tousLesFruits()
   
  }

  //AJOUTER LEGUME FRUIT
  onSubmit(): void {
    const { 
      nom,
      description,
      arrosage,
      periodeNormal,
      dureeFloraison,
      type,
      idTuto
    } = this.form;
    
    console.log('ffffffffffffffff'+dureeFloraison)
    this.legumeFruitService.PostLegumeFruit(nom, description, arrosage, periodeNormal, dureeFloraison, this.file,  type,idTuto, this.User.id).subscribe({
      
      next: data => {
        //pour actualiser la page sur laquelle on se trouve
        location.reload();
        this.tousLesFruits()
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  filechange(event: any) {
    this.file = event.target['files'][0];
    console.log(event)
  }

  getTuto() {
    //AFFICHER LES LEGUMES 
    this.legumeFruitService.GetTUtoriel().subscribe(data => {
      this.tutos = data;
      console.log(this.tuto)
    })
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
        location.reload();
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

  


