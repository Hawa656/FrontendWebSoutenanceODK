import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import Swal from 'sweetalert2';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';
import {MatDialog} from '@angular/material/dialog';
import { AjoutTutorielComponent } from '../ajout-tutoriel/ajout-tutoriel.component';
import { AjoutEtapeComponent } from '../ajout-etape/ajout-etape.component';
import { ModifierlegumefruitComponent } from '../modifierlegumefruit/modifierlegumefruit.component';



@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.component.html',
  styleUrls: ['./legumes.component.scss']
})
export class LegumesComponent implements OnInit {
  legumesFruits:any;
  tuto:any
  tutos:any
  idLegume: any;
  idLegumeId:any
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
  searchText: any;

  constructor(private route1 : ActivatedRoute, public dialog2: MatDialog,public dialog1: MatDialog,public dialog: MatDialog,private legumeFruitService: LegumeFruitService, private route: Router, private userService: UserService, private storageService: StorageService) {}

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

  openDialog2(id:number) {
    alert(id)
    const dialogRef2 = this.dialog2.open(ModifierlegumefruitComponent);

    dialogRef2.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    
  }

 
  ngOnInit() {
    this.tousLesLegumes();
    this.User = this.storageService.getUser();
    this.getTuto()
    this.legumeFruitService.GetTypeLegumeFruit().subscribe(data => {
      this.types = data;
      console.log(this.types)
    })
    this.idLegumeId= this.route1.snapshot.params["id"]
  }


  eee(){
    this.getTuto()
  }

  //AJOUTER LEGUME FRUIT
  onSubmit(): void {
    this.tousLesLegumes()
    const { 
      nom,
      description,
      arrosage,
      periodeNormal,
      dureeFloraison,
      type,
      idTuto
    } = this.form;
    
    // console.log('ffffffffffffffff'+dureeFloraison+description)
    this.legumeFruitService.PostLegumeFruit(nom, description, arrosage, periodeNormal, dureeFloraison, this.file,  type,idTuto, this.User.id).subscribe({
      
      next: data => {
        // location.reload();
        this.tousLesLegumes()
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
    // location.reload();
   
  }

  rechargement(){
    this.ngOnInit()
  }

  goToDetailLegume(idLegumeId: number) {
    return this.route.navigate(['/legumedetails', idLegumeId])
  }

  filechange(event: any) {
    this.file = event.target['files'][0];
    console.log(event)
  }

   //LA METHODE PERMETTANT DE SUPPRIMER UN FRUIT OU LEGUME
   supprimerLegumesFruits(id: number) {
    return this.route.navigate(['/legume-fruit', id])
  }

   //pour limitter la longueur du text
   limitTextarea(event: any, limit: number) {
    const target = event.target;
    const length = target.value.length;
  
    if (length > limit) {
      target.value = target.value.substring(0, limit);
    }
  }
  //================================================ suprimer ===================

  openModal(nom: any, id: number) {
    Swal.fire({
      title: nom,
      text: " Voulez-vous vraiment supprimer ce legume ? ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#399C28',
      cancelButtonColor: '#d33',
      cancelButtonText: "NON",
      confirmButtonText: 'OUI'
    }).then((result) => {
      if (result.isConfirmed) {
        //suppp
        this.legumeFruitService.supprimerLegumesFruits(id).subscribe(data => {
          this.tousLesLegumes()
          
          console.log(id)
          Swal.fire({
            title: 'Supprimer  avec succès',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
          // window.location.reload()
          this.reloadPage()
        });

      }
    });
  }

  // POUR RECHARGER LA PAGE AUTOMATIQUEMENT
  reloadPage(): void {
    window.location.reload();
  }

  // modifierLegumesFruits(id: number): void {
  //   this.legumeFruitService.modifierLegumesFruits(id, this.legumesFruits)
  //     .subscribe(legumesFruitsModifie => {
  //       console.log('Légumes/fruits modifié : ', legumesFruitsModifie);
  //     });
  // }

  // ========================================== RECUPERATION DE TOUS LES LEGUMES

  tousLesLegumes() {
    //AFFICHER LES LEGUMES 
    this.legumeFruitService.getLegume().subscribe(data => {
      this.legume = data;
      console.log(this.legume)
    })
  }

  getTuto() {
    //AFFICHER LES TUTO 
    this.legumeFruitService.GetTUtoriel().subscribe(data => {
      this.tutos = data;
      console.log(this.tuto)
    })
  }


  getLegumeId(id:number){
    this.idLegume=id
  }

 

  // onSubmit(): void {
  //   const { nom, description, arrosage, periodeNormal, dureeFloraisaon, file, titre, etape1, etape2, etape3, etape4, etatDeLaTerre, espacementEntreGraine, type, iduser } = this.form;
  //   this.legumeFruitService.modifierLegumeFruit(nom, description, arrosage, periodeNormal, dureeFloraisaon, file, titre, etape1, etape2, etape3, etape4, etatDeLaTerre, espacementEntreGraine, type, this.User.id).subscribe({
  //     next: data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   });
  // }
  GetTypeLegumeFruit() {
    this.legumeFruitService.GetTypeLegumeFruit().subscribe(data => {
      this.form.type = data;
      console.log(this.form.type)
    })
  }

  updateLegume(id: number){
    this.route.navigate(['/modifierlegumefruit', id]);
  }


}
