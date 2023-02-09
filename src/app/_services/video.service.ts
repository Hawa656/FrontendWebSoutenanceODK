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

  constructor(private http: HttpClient) { } 
    // ====================AJOUTER UNE VIDEO===============
  AjoutVideo(file: File, videorecu: string, idLegumeFruit:number, iduser:number): Observable<any>{

    let data = new FormData();
    data.append("file",file);
    data.append("videorecu",videorecu);

    console.log('le file est ', file)
    console.log('le titre est ', videorecu)
    
    return this.http.post<any>( 
      AUTH_API + 'Ajouter/' + `${idLegumeFruit}/` + `${iduser}`, data
      )

}
}
