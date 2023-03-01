import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Legume } from '../models/Legume';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-modifierlegumefruit',
  templateUrl: './modifierlegumefruit.component.html',
  styleUrls: ['./modifierlegumefruit.component.scss']
})
export class ModifierlegumefruitComponent {

  id!: number;
  legumeModif: Legume = new Legume();

  legume:any
  legumesFruits:any;
  tuto:any
  tutos:any
  idLegume: any;
  types: any;
  roles: string[] = [];

  User: any;

 
   form: any 
    = {
    nom: null,
    description: null,
    arrosage: null,
    periodeNormal: null,
    dureeFloraison: null,
     type: null,
   }; 
  
  
  file: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  

  constructor(private legumeFruitService: LegumeFruitService,private storageService: StorageService,private route: ActivatedRoute){
    this.User = this.storageService.getUser();
  }

  ngOnInit() {
    this.tousLesLegumes();
    this.User = this.storageService.getUser();
   
    this.legumeFruitService.GetTypeLegumeFruit().subscribe(data => {
      this.types = data;
      console.log(this.types)
    })

    //
    this.id = this.route.snapshot.params['id'];

    //
    this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data => {
      this.legumeModif = data;
    },
     error => console.log(error));
  }
  

  
  tousLesLegumes() {
    //AFFICHER LES LEGUMES 
    this.legumeFruitService.getLegume().subscribe(data => {
      this.legume = data;
      console.log(this.legume);
    })
  }

 

  filechange(event: any) {
    this.file = event.target['files'][0];
    console.log(event)
  }
  GetTypeLegumeFruit() {
    this.legumeFruitService.GetTypeLegumeFruit().subscribe(data => {
      this.form.type = data;
      console.log(this.form.type)
    })
  }
  // onSubmit(id:number): void {
  //   const { nom, description, arrosage, periodeNormal, dureeFloraisaon, file, type } = this.form;
  //   this.legumeFruitService.modifierLegumeFruit(nom, description, arrosage, periodeNormal, dureeFloraisaon, file,type, id).subscribe({
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


  onSubmit(){
    this.legumeFruitService.updateLegume(this.id, this.legumeModif).subscribe( data =>{
      console.log(data);
    }
    , error => console.log(error));
  }


  

}
