import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConseilsService } from '../_services/conseils.service';
import { StorageService } from '../_services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.scss']
})
export class ConseilsComponent  implements OnInit {
  conseil: any
  // pour la barre de recherche:
  searchText:any;

  roles: string[] = [];

  User : any

  form: any = {
    titre: null,
    description:null,
    idConseil:null


  };
  file: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  idUser: any;
   constructor(private conseilService: ConseilsService, private route : Router,private storageService: StorageService) { }
 
   ngOnInit() {
    this.tousLesConseils();
    //  this.User = this.storageService.getUser();
     this.idUser=this.storageService.getUser().id;
     
   }
    //LA METHODE PERMETTANT DE NAVIGER VERS LA PAGE DU DETAILS CONSEIL
   goToDetailConseils(id:number){
     return this.route.navigate(['/tabs/details-conseil', id])
   }
   rechargement(){
    this.ngOnInit()
  }
   filechange(event: any) {
    this.file = event.target['files'][0];
    console.log(event)
  }

  //pour limitter la longueur du text
  limitTextarea(event: any, limit: number) {
    const target = event.target;
    const length = target.value.length;
  
    if (length > limit) {
      target.value = target.value.substring(0, limit);
    }
  }
  onSubmit(): void {
    const { titre,description, idUser} = this.form;
    this.conseilService.PostConseil(titre,description,this.file,this.idUser).subscribe({
      next: data => {
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

//================================================ suprimer ===================

openModal(titre: any, idConseil: number) {
  Swal.fire({
    title: titre,
    text: " Voulez-vous vraiment supprimer ce conseil ? ",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#399C28',
    cancelButtonColor: '#d33',
    cancelButtonText: "NON",
    confirmButtonText: 'OUI'
    
  }).then((result) => {
    if (result.isConfirmed) {
      //suppp
      this.conseilService.supprimerConseil(idConseil).subscribe(data => {
        this.tousLesConseils()
        
        console.log('dfcvghbnjk,l;kjhgfcdsfghjnk',idConseil)
        Swal.fire({
          title: 'Supprimer  avec succès',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        this.rechargement()
        window.location.reload()
      });

    }
  });
}
tousLesConseils(){
  //AFFICHER LES CONSEILS
  this.conseilService.getConseil().subscribe(data=>{
    this.conseil = data;
    console.log(this.conseil)
  })
}
}
