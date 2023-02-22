import { Component } from '@angular/core';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-ajouter-legume-fruit',
  templateUrl: './ajouter-legume-fruit.component.html',
  styleUrls: ['./ajouter-legume-fruit.component.scss']
})
export class AjouterLegumeFruitComponent {
  // semis: any;
  // bouture: any;

  types: any
  roles: string[] = [];

  User : any

  form: any = {
    nom: null,
    description: null,
    arrosage: null,
    periodeNormal: null,
    dureeFloraisaon: null,

    titre: null,
    etape1: null,
    etape2: null,
    etape3: null,
    etape4: null,
    etatDeLaTerre: null,
    espacementEntreGraine: null,
    
    // type : null
  };
  file: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private legumeFruitService: LegumeFruitService,  private storageService: StorageService) { }

  ngOnInit() {
    this.legumeFruitService.GetTypeLegumeFruit().subscribe(data=>{
      this.types = data;
      console.log(this.types)
     })

     this.User = this.storageService.getUser();
  
  }
  filechange(event: any) {
    this.file = event.target['files'][0];
    console.log(event)
  }
  // onSubmit(): void {
  //   const { 
  //     nom,
  //     description,
  //     arrosage,
  //     periodeNormal,
  //     dureeFloraisaon,
  //     titre,
  //     etape1,
  //     etape2,
  //     etape3,
  //     etape4,
  //     etatDeLaTerre,
  //     espacementEntreGraine,
  //     semis,
  //     bouture,
  //     type,
  //   } = this.form;
  //   console.log(type)
  //   this.legumeFruitService.PostLegumeFruit(nom,
  //     description,
  //     arrosage,
  //     periodeNormal,
  //     dureeFloraisaon,
  //     this.file,
  //     titre,
  //     // etape1,
  //     // etape2,
  //     // etape3,
  //     // etape4,
  //     // etatDeLaTerre,
  //     espacementEntreGraine,
  //     type, this.User.id).subscribe({
  //       next: data => {
  //         console.log(data);
  //         this.isSuccessful = true;
  //         this.isSignUpFailed = false;
  //       },
  //       error: err => {
  //         this.errorMessage = err.error.message;
  //         this.isSignUpFailed = true;
  //       }
  //     });
  // }



}
