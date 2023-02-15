import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import Swal from 'sweetalert2';
import { UserService } from '../_services/user.service';



@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.component.html',
  styleUrls: ['./legumes.component.scss']
})
export class LegumesComponent implements OnInit {

  form: any = {
    nom: null,
    description: null,
    arrosage: null,
    periodeNormal: null,
    dureeFloraisaon: null,
    file: null,
    titre: null,
    etape1: null,
    etape2: null,
    etape3: null,
    etape4: null,
    etatDeLaTerre: null,
    espacementEntreGraine: null,
    type: null,
    iduser: null
  };

  User: any

  file: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  legume: any
  id: any
  // pour la barre de recherche:
  searchText: any;

  constructor(private legumeFruitService: LegumeFruitService, private route: Router, private userService: UserService) { }

  ngOnInit() {
    this.tousLesLegumes()
    // this.legumeFruitService.supprimerLegumesFruits(this.id)
  }

  //LA METHODE PERMETTANT DE SUPPRIMER UN FRUIT OU LEGUME
  supprimerLegumesFruits(id: number) {
    return this.route.navigate(['/tabs/legume-fruit', id])
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
          Swal.fire(
            'Supprimer!',
            'supprimé avec succès'
          );
        });

      }
    });
  }

  // ========================================== RECUPERATION DE TOUS LES LEGUMES

  tousLesLegumes() {
    //AFFICHER LES LEGUMES 
    this.legumeFruitService.getLegume().subscribe(data => {
      this.legume = data;
      console.log(this.legume)
    })
  }

  filechange(event: any) {
    this.file = event.target['files'][0];
    console.log(event)
  }

  onSubmit(): void {
    const { nom, description, arrosage, periodeNormal, dureeFloraisaon, file, titre, etape1, etape2, etape3, etape4, etatDeLaTerre, espacementEntreGraine, type, iduser } = this.form;
    this.legumeFruitService.modifierLegumeFruit(nom, description, arrosage, periodeNormal, dureeFloraisaon, file, titre, etape1, etape2, etape3, etape4, etatDeLaTerre, espacementEntreGraine, type, this.User.id).subscribe({
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
  GetTypeLegumeFruit() {
    this.legumeFruitService.GetTypeLegumeFruit().subscribe(data => {
      this.form.type = data;
      console.log(this.form.type)
    })
  }

}
