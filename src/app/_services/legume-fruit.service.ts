import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Legume } from '../models/Legume';

const AUTH_API = 'http://localhost:8080/api/legumefruit/';
const AUTH_API1 = 'http://localhost:8080/api/tuto/';
const AUTH_API3 = 'http://localhost:8080/api/etape/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LegumeFruitService {
  //api1 = 'http://localhost:8080/api/legumefruit/';
  api = 'http://localhost:8080/api/TypeLegumeFruit';
  apiSupprimer = 'http://localhost:8080/api/legumefruit';

  api1= "http://localhost:8080/api/legumefruit";
  api2= "http://localhost:8080/api/video";

  constructor(private http: HttpClient) { }

  //AFFICHAGE DES LEGUMES 
  getLegume():Observable<any>{
    return this.http.get(`${this.api1}/lireLegumes`);
  }

  //AFFICHAGE DES FRUITS
  getFruit():Observable<any>{
    return this.http.get(`${this.api1}/lireFruits`)
  }

  updateLegume(id: number, legume:Legume): Observable<Object>{
    return this.http.put(`${this.api1}/modifierLegumesFruits/${id}`, legume);
  }
 
  //AFFICHE (la video de la page legumeFruit) LES INFO SUR LEGUMESFRUITS, VIDEO ,TUTORIELS
  getTousLesInfoSurUnLegumeFruit(idLegumesFruits:any):Observable<any>{
    return this.http.get(`${this.api2}/videoparIdLegumeFruit/${idLegumesFruits}`);
  }


   //RECUPERATION DE L'ID DU LEGUMES 
   recupererIdLegumeFruit(id:number):Observable<any>{
    return this.http.get(`${this.api1}/RecupererIdLegumeFruit/${id}`);
  }

  //RECUPERATION DE L'ID DU TUTORIEL 
  recupererIdTuto(idTuto:number):Observable<any>{
    return this.http.get<any>( 
      AUTH_API1 + 'RecupererIdTutoriel' + `${idTuto}`
      )
  }


  
   //SUPPRIMER LEGUME OU FRUIT ET LE TUTORIEL ASSOCIE
   supprimerLegumesFruits(id:number):Observable<any>{
    return this.http.delete(`${this.apiSupprimer}/supprimerlegumesFruits/${id}`);
  }


  //AFFICHAGE TYPELEGUMEFRUIT
  GetTypeLegumeFruit():Observable<any>{
    return this.http.get(`${this.api}/lireTypeLegumeFruit`);
  }

   //AFFICHAGE LEGUMEFRUIT
   GetLegumeFruit():Observable<any>{
    return this.http.get<any>( 
      AUTH_API + 'lireLegumesFruits'
      )
   
  }

  //AFFICHAGE TUTORIEL
  GetTUtoriel():Observable<any>{
    return this.http.get<any>( 
      AUTH_API1 + 'lireTutoriel'
      )
   
  }

  // +++++++++++++++++AJOUTER UNE ETAPE+++++++++++++++++++++++
  PostEtape(titre: any, file: File, etape: any, idTuto: number): Observable<any> {
    let data = new FormData();
    data.append("titre", titre);
    data.append("etape", etape);  
    data.append("file", file);
  
    return this.http.post<any>(
      AUTH_API3 + 'ajouterEtape/' + `${idTuto}`, data
    );
  }
  


   // +++++++++++++++++AJOUTER UN TUTORIEL+++++++++++++++++++++++
   PostTutoriel(donner:any, idLegumeFruit:number):Observable<any> {
    // let data = new FormData();
    // data.append("titre",titre);
    // data.append("espacementEntreGraine",espacementEntreGraine);

    // console.log('le nom est ', nom)
    // console.log('le description est ', description)
    
    return this.http.post<any>( 
      AUTH_API1 + 'AjouterTutoriel/' , donner
      )
  }

  // +++++++++++++++++AJOUTER UN LEGUMEFRUIT+++++++++++++++++++++++
  PostLegumeFruit(nom: string, description: string, arrosage: string, periodeNormal: string, dureeFloraisaon: string, file: File , type:string, idTuto:number,iduser:number):Observable<any> {
    let data = new FormData();
    data.append("nom",nom);
    data.append("description",description);
    data.append("arrosage",arrosage);
    data.append("periodeNormal",periodeNormal);
    data.append("dureeFloraisaon",dureeFloraisaon);
    data.append("file",file);
    
    
    // data.append("type",type);

    // console.log('le nom est ', nom)
    // console.log('le description est ', description)
    // console.log('le arrosage est ', arrosage)
    // console.log('le periodeNormal est ', periodeNormal)
    // console.log('le dureeFloraisaon est ', dureeFloraisaon)
    // console.log('le file est ', file)
    return this.http.post<any>( 
      AUTH_API + 'Ajouterajoutfruilegume/' + `${type}/` + `${idTuto}/`+ `${iduser}`, data
      )
  }
  

   modifierLegumesFruits(id: number, legumesFruits: any): Observable<any> {
    const url = `${this.api1}/modifierLegumesFruits/${id}`;
    return this.http.put<any>(url, legumesFruits);
  }
  


  // +++++++++++++++++MODIFIER UN LEGUMEFRUIT+++++++++++++++++++++++
  modifierLegumeFruit(nom: string, description: string, arrosage: string, periodeNormal: string, dureeFloraisaon: string, file: File,  type:string, id:number):Observable<any> {
    return this.http.put(
      AUTH_API + 'modifierLegumesFruits/' + `${id}`,
      {
        "nom":nom,
         "description":description,
         "arrosage":arrosage,
         "periodeNormal":periodeNormal,
         "dureeFloraisaon":dureeFloraisaon,
         "file":file,
         "type":type,
         "iduser":id,
    },
      httpOptions
    );
  }
 }
