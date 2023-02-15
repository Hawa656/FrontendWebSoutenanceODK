import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../Video';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private api= "http://localhost:8080/api/video/lireVideo";

  constructor(private httpClient: HttpClient) { }

  countVideos(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:8080/api/video/countVideo');
    //return this.http.get<number>('${this.api}/count');
    //return this.http.get<number>(`${this.api}/countVideo`);
  }

  

   //AFFICHAGE DES VIDEOS 
   getListVideo() : Observable<Video[]>{
    return this.httpClient.get<Video[]>("http://localhost:8080/api/video/lireVideo");
  }

  //AFFICHAGE DES TUTORIELS 
  getListTutoriel() : Observable<Video[]>{
    return this.httpClient.get<Video[]>("http://localhost:8080/api/tuto/lireTutoriel");
  }

   
}
''