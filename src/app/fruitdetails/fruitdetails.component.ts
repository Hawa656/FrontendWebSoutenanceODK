import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-fruitdetails',
  templateUrl: './fruitdetails.component.html',
  styleUrls: ['./fruitdetails.component.scss']
})
export class FruitdetailsComponent {

  fruit:any
  id:any
  constructor(private legumeFruitService: LegumeFruitService,private storageService: StorageService,private route: ActivatedRoute){
    // this.User = this.storageService.getUser();
  }
  
  ngOnInit() {
    this.recupererFruitParId()
     }
 
     recupererFruitParId(){
       this.id= this.route.snapshot.params["id"]
       this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data => {
         this.fruit = data;
        //  console.log(this.fruit)
       })
     }
 
}
