import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Legume } from '../models/Legume';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-modifierfruit',
  templateUrl: './modifierfruit.component.html',
  styleUrls: ['./modifierfruit.component.scss']
})
export class ModifierfruitComponent {

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
  

  constructor(private legumeFruitService: LegumeFruitService,private storageService: StorageService,private route: ActivatedRoute,private router:Router){
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
  


  onSubmit(){
    this.legumeFruitService.updateFruit(this.id, this.legumeModif).subscribe( data =>{
      this.router.navigate(['/fruits'])
      console.log(data);
    }
    , error => console.log(error));
  }


}
