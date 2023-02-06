import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../_services/home.service'; 
import { Video } from '../Video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   videoCount!: Video[];
   videoList: any

  constructor(private homeService :HomeService,private httpClient: HttpClient) { }
  
  ngOnInit() {


    // // Lister les Regions;
    // this.httpClient.get('http://localhost:8080/api/video/lireVideo').subscribe(
    //   // La prémière méthode si ça marche
    //   (videoList:any) => {
    //     console.log('------------- Liste Video -------', videoList)
    //     this.videoList = videoList
    //   })
    
    // this.getvideolist()
    // this.httpClient.get
    //AFFICHER LES Videos
  //   this.homeService.getListVideo().subscribe(data=>{
  //    this.videoCount = data;
     
  //  })
   
 }
   
 getvideolist() {
  this.homeService.getListVideo().subscribe(count => {
    this.videoCount = count;
    console.log('sdfghjkljhgfdsfghjkl'+this.videoCount)
    
  });
}




  // getVideoCount() {
  //   this.homeService.countVideos().subscribe(count => {
  //     this.videoCount = count;
  //     console.log("dfghjklkjhgfdghjkljhgf"+ this.getVideoCount)
  //   });
  // }


}








