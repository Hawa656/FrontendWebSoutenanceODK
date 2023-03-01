import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Legume } from '../models/Legume';

const AUTH_API = 'http://localhost:8080/api/questions/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ForumService {
  api= "http://localhost:8080/api/questions";
  api1= "http://localhost:8080/api/reponses";

  constructor(private http:HttpClient) { }

  // AJOUTER QUESTION
  PostQuestion(question: any, id_user:any):Observable<any> {
    let data = new FormData();
    data.append("question",question);
    console.log(id_user)
    return this.http.post<any>( 
      this.api + '/ajouterQuestion/'+ `${id_user}`,data
      )
  }

  //  // AJOUTER REPONSE
  //  PostReponse(reponse: any,idquestion:any, idUser:any):Observable<any> {
  //   let data = new FormData();
  //   data.append("question",reponse);
  //   console.log(idUser)
  //   return this.http.post<any>( 
  //     this.api1 + '/ajouter/'+ `${idquestion}`+`${idUser}`,data
  //     )
  // }

  PostReponse(reponse: any,idquestion:any, idUser:any):Observable<any> {
      let data = new FormData();
      data.append("reponse",reponse);
      // console.log(idUser)
      return this.http.post(`http://localhost:8080/reponses/ajouter/${idquestion}/${idUser}`,data)
    }


  //AFFICHAGE DES Questions
  getQuestion():Observable<any>{
    return this.http.get(`${this.api}/lireQuestion/`)
  }

  //AFFICHAGE DES lireReponsesParQuestion
  getReponsesParQuestion(id_question:any):Observable<any>{
    // return this.http.get(`${this.api1}/lireReponsesParQuestion/${id_question}`)
    return this.http.get(`http://localhost:8080/reponses/lireReponsesParQuestion/${id_question}`)
  }

  //AFFICHAGE DES REponses
  getReponse():Observable<any>{
    return this.http.get(`${this.api}/lireReponses`)
  }

  //RECUPERATION DE L'ID DU LEGUMES 
   recupererIdQuestion(idQuestion:number):Observable<any>{
    return this.http.get(`${this.api}/RecupererIdQuestion/${idQuestion}`);
  }


}

