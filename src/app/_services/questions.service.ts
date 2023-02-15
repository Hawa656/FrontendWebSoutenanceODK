import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/questions/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  api = 'http://localhost:8080/api/questions';

  constructor(private http: HttpClient) { }

   //AFFICHAGE DES QUESTIONS NON REPONDU 
   getListeDesQuestionsNonRepondu():Observable<any>{
    return this.http.get(`${this.api}/ListeDesQuestionsNonRepondu`);
  }

  // +++++++++++++++++AJOUTER UNE QUESTION+++++++++++++++++++++++
  PostQuestion(question: string, id_user:number):Observable<any> {
    let data = new FormData();
    data.append("question",question);

    console.log('le question est ', question)
    
    return this.http.post<any>( 
      AUTH_API + 'ajouterQuestion/'  + `${id_user}`, data
      )
  }
}
