import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { LegumesService } from '../_services/legumes.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  fruit: any

  constructor(private legumeService: LegumesService, private route: Router) { }
  ngOnInit(){

    //AFFICHER LES  FRUITS
    this.legumeService.getFruit().subscribe(data=>{
      this.fruit = data;
      console.log("  )))))))))))))))) " + this.fruit)
      console.log("  )))))))))))))))) " + this.fruit.titre)
    })
  }

  //LA METHODE PERMETTANT DE NAVIGER VERS LA PAGE DU DETAILS FRUIT
  goToDetailFruit(id:number){
    return this.route.navigate(['/legume-fruit-fruit', id])
  }


  

}
