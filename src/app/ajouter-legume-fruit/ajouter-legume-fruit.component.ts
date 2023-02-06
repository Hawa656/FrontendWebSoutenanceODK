import { Component } from '@angular/core';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-ajouter-legume-fruit',
  templateUrl: './ajouter-legume-fruit.component.html',
  styleUrls: ['./ajouter-legume-fruit.component.scss']
})
export class AjouterLegumeFruitComponent {
  form: any = {
    nom: null,
    description: null,
    arrosage: null,
    periodeNormal: null,
    dureeFloraisaon: null,

    titre: null,
    descriptiont: null,
    etatDeLaTerre: null,
    espacementEntreGraine: null,
    semis: null,
    bouture: null
  };
  file: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private legumeFruitService: LegumeFruitService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const { nom,
      description,
      arrosage,
      periodeNormal,
      dureeFloraisaon,
      titre,
      descriptiont,
      etatDeLaTerre,
      espacementEntreGraine,
      semis,
      bouture } = this.form;
    this.legumeFruitService.AjoutLegumeFruit(nom,
      description,
      arrosage,
      periodeNormal,
      dureeFloraisaon,
      this.file,
      titre,
      descriptiont,
      etatDeLaTerre,
      espacementEntreGraine,
      semis,
      bouture).subscribe({
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


  filechange(event: any) {
    this.file = event.target.files[0];
    console.log(event)
  }
}
