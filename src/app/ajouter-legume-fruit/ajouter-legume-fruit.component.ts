import { Component } from '@angular/core';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-ajouter-legume-fruit',
  templateUrl: './ajouter-legume-fruit.component.html',
  styleUrls: ['./ajouter-legume-fruit.component.scss']
})
export class AjouterLegumeFruitComponent {
  // semis: any;
  // bouture: any;
  id: any
  types: any

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
    semis:  null,
    bouture: null,
    // type : null
  };
  file: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private legumeFruitService: LegumeFruitService) { }

  ngOnInit() {
    this.legumeFruitService.GetTypeLegumeFruit().subscribe(data=>{
      this.types = data;
      console.log(this.types)
     })
  
  }
  filechange(event: any) {
    this.file = event.target['files'][0];
    console.log(event)
  }
  onSubmit(): void {
    const { 
      nom,
      description,
      arrosage,
      periodeNormal,
      dureeFloraisaon,
      titre,
      descriptiont,
      etatDeLaTerre,
      espacementEntreGraine,
      semis,
      bouture,
      type,
    } = this.form;
    console.log(type)
    this.legumeFruitService.PostLegumeFruit(nom,
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
      bouture,
      type).subscribe({
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



}
