import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../_services/home.service';
import { Video } from '../Video';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { QuestionsService } from '../_services/questions.service';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fruit:any
  mesVideos:any;
  legume:any
  tuto:number=0
  questionsNonRepondu:any
  listAdmin:any
  listUser:any
  user:any

  constructor(private storageService: StorageService,private homeService: HomeService,private userservice:UserService, private questionService: QuestionsService,private legumeFruitService:LegumeFruitService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getvideolist()
    this.getNbreFruit()
    this.getNbreLegume()
    this.getNbreTutoriel()
    this.getNbreListeDesQuestionsNonRepondu()
    this.getNbreAdmin()
    this.getNbreUser()
    this.user = this.storageService.getUser();
  }

  getvideolist() {
    this.homeService.getListVideo().subscribe(data => {

      this.mesVideos = data.length
    });
  }

  getNbreFruit(){
    this.legumeFruitService.getFruit().subscribe(data => {

      this.fruit = data.length
    });
  }

  getNbreLegume(){
    this.legumeFruitService.getLegume().subscribe(data => {

      this.legume = data.length
    });
  }

  getNbreTutoriel(){
    this.homeService.getListTutoriel().subscribe(data => {

      this.tuto = data.length
    });
  }

  getNbreListeDesQuestionsNonRepondu(){
    this.questionService.getListeDesQuestionsNonRepondu().subscribe(data => {

      this.questionsNonRepondu = data.length
    });
  }

getNbreAdmin(){
  this.userservice.getListUserByRole("user").subscribe(data => {
    this.listUser = data.length
  });
}

getNbreUser(){
  this.userservice.getListUserByRole("admin").subscribe(data => {
    this.listAdmin = data.length
  });
}

}








