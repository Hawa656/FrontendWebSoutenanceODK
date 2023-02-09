import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-legume-fruit-fruit',
  templateUrl: './legume-fruit-fruit.component.html',
  styleUrls: ['./legume-fruit-fruit.component.scss']
})
export class LegumeFruitFruitComponent {
  Fruit : any
  id: any

  constructor(private route : ActivatedRoute, private legumeFruitService : LegumeFruitService) { }

}
