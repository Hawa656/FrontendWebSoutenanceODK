import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:8080/api/conseil/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ConseilsService {

  api= "http://localhost:8080/api/conseil";

  constructor(private http : HttpClient) { }

   //AFFICHAGE DES CONSEILS 
   getConseil():Observable<any>{
    return this.http.get(`${this.api}/lireConseil`);
  }

  //RECUPERATION DE L'ID DU CONSEIL 
  recupererIdConseil(idConseil:number):Observable<any>{
    return this.http.get(`${this.api}/RecupererIdConseil/${idConseil}`);
  }

  // +++++++++++++++++AJOUTER UN CONSEIL+++++++++++++++++++++++
  PostConseil(titre: string, description: string, file: File, iduser:number):Observable<any> {
    let data = new FormData();
    data.append("titre",titre);
    data.append("description",description);
    data.append("file",file);

    console.log('le titre est ', titre)
    console.log('le description est ', description)
    console.log('le file est ', file)
   
    return this.http.post<any>( 
      AUTH_API + 'Ajouter/'  + `${iduser}`, data
      )
  }

  //SUPPRIMER CONSEIL
  supprimerConseil(idConseil:number):Observable<any>{
    console.log("",idConseil)
    return this.http.delete(`${this.api}/supprimerConseil/${idConseil}`);
  }
}
