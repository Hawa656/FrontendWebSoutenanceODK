import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../_services/home.service';
import { Video } from '../Video';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fruit:any
  mesVideos:any;
  legume:any
  tuto:any

  constructor(private homeService: HomeService,private legumeFruitService:LegumeFruitService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getvideolist()
    this.getNbreFruit()
    this.getNbreLegume()
    this.getNbreTutoriel()
  }

  getvideolist() {
    this.homeService.getListVideo().subscribe(data => {

      this.mesVideos = data
    });
  }

  getNbreFruit(){
    this.legumeFruitService.getFruit().subscribe(data => {

      this.fruit = data
    });
  }

  getNbreLegume(){
    this.legumeFruitService.getLegume().subscribe(data => {

      this.legume = data
    });
  }

  getNbreTutoriel(){
    this.homeService.getListTutoriel().subscribe(data => {

      this.tuto = data
    });
  }



}








