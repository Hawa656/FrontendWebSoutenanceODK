import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-legumedetails',
  templateUrl: './legumedetails.component.html',
  styleUrls: ['./legumedetails.component.scss']
})
export class LegumedetailsComponent {
legum:any
  legume:any
  id:any
  abasse:any
ret:any;
  legumeValues: any[] = [];

  constructor(private legumeFruitService: LegumeFruitService,private storageService: StorageService,private route: ActivatedRoute){
    // this.User = this.storageService.getUser();
  }
tt:any
  ngOnInit() {
    this.id= this.route.snapshot.params["id"]
      this.legumeFruitService.recupererIdLegumeFruitAvecTutoEtEtape(this.id).subscribe(data => {
        this.legume = data;
        console.log(this.legume[0][9])
   this.tt = this.legume[0][9]
        console.log("qbqsse ")
                console.log(this.legume)
                for(let i=0;i<this.legume.length;i++){
                   this.legum = this.legume[i]
                  console.log("qbqsse "+this.legum[9])
                  console.log(this.legume[i][9])
                  this.abasse = this.legum[4]
                   this.ret = this.legume[i][9]
                   console.log("retyuiop "+this.ret)
                  this.legumeValues.push(this.legume[i][9]);
                }
            

          
      })
    }

    // recupererFruitParId(){
    //   this.id= this.route.snapshot.params["id"]
    //   this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data => {
    //     this.legume = data;
    //     console.log(this.legume)
    //   })
    // }

    recupererFruitParId(){
      this.id= this.route.snapshot.params["id"]
      this.legumeFruitService.recupererIdLegumeFruitAvecTutoEtEtape(this.id).subscribe(data => {
        this.legume = data;
        console.log("qbqsse ")
                console.log(this.legume)
                for(let i=0;i<this.legume.length;i++){
                   this.legum = data[i]
                  console.log("qbqsse "+i)
                  console.log(this.legume[i][9])
                  this.abasse = this.legum[4]
                   this.ret = this.legume[i][9]
                   console.log("retyuiop "+this.ret)
                  this.legumeValues.push(this.legume[i][9]);
                }
            

          
      })
    }

    
  
}
