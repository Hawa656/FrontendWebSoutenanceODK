import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LegumeFruitService } from './legume-fruit.service';

const AUTH_API = 'http://localhost:8080/api/video/';
// const api = 'http://localhost:8080/api/TypeLegumeFruit/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  api= "http://localhost:8080/api/video";

  constructor(private http: HttpClient) { } 
    // ====================AJOUTER UNE VIDEO===============
  AjoutVideo(file: File, videorecu: any, idLegumeFruit:number, iduser:number): Observable<any>{

    let data = new FormData();
    data.append("file",file);
    data.append("videorecu", JSON.stringify(videorecu).slice(1,JSON.stringify(videorecu).lastIndexOf(']')));

    console.log('le file est ', file)
    console.log('le titre est ', videorecu)
    
    return this.http.post<any>( 
      AUTH_API + 'Ajouter/' + `${idLegumeFruit}/` + `${iduser}`, data
      )
}

 //FILTRAGE DES VIDEOS PAR FRUITS ET LEGUMES
 getFiltrerParFruitEtLegume(aba:any):Observable<any>{
  return this.http.get(`${this.api}/listeVideoLegume/${aba}`);
}
// ==========================END FILTRAGE==============================


//AFFICHAGE DES VIDEOS 
getVideo():Observable<any>{
  return this.http.get(`${this.api}/lireVideo`);
}
//SUPPRIMER UNE VIDEO
supprimerVideo(id:number):Observable<any>{
  return this.http.delete(`${this.api}/supprimerVideo/${id}`);
}
}
