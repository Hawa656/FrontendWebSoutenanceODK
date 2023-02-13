import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/legumefruit/';
// const api = 'http://localhost:8080/api/TypeLegumeFruit/';
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

  //AFFICHE (la video de la page legumeFruit) LES INFO SUR LEGUMESFRUITS, VIDEO ,TUTORIELS
  getTousLesInfoSurUnLegumeFruit(idLegumesFruits:any):Observable<any>{
    return this.http.get(`${this.api2}/videoparIdLegumeFruit/${idLegumesFruits}`);
  }


   //RECUPERATION DE L'ID DU LEGUMES 
   recupererIdLegumeFruit(id:number):Observable<any>{
    return this.http.get(`${this.api1}/RecupererIdLegumeFruit/${id}`);
  }


  
   //SUPPRIMER LEGUME OU FRUIT ET LE TUTORIEL ASSOCIE
   supprimerLegumesFruits(id:number):Observable<any>{
    return this.http.delete(`${this.apiSupprimer}/supprimerlegumesFruits/${id}`);
  }

// AjoutLegumeFruit(nom: string, description: string, arrosage: string, periodeNormal: string, dureeFloraisaon: string, file: File, titre: string, descriptiont: string, etatDeLaTerre: string, espacementEntreGraine: string, semis: boolean,bouture: boolean): Observable<any> {
//     return this.http.post(
//       AUTH_API + 'Ajouterajoutfruilegume',
      
//       {
//         nom,
//         description,
//         arrosage,
//         periodeNormal,
//         dureeFloraisaon,
//         file,
//         titre,
//         descriptiont,
//         etatDeLaTerre,
//         espacementEntreGraine,
//         semis,
//         bouture
//       },
//       httpOptions
//     );
//   }
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
  

  PostLegumeFruit(nom: string, description: string, arrosage: string, periodeNormal: string, dureeFloraisaon: string, file: File, titre: string, etape1: string,etape2: string,etape3: string,etape4: string, etatDeLaTerre: string, espacementEntreGraine: string, type:string, iduser:number):Observable<any> {
    let data = new FormData();
    data.append("nom",nom);
    data.append("description",description);
    data.append("arrosage",arrosage);
    data.append("periodeNormal",periodeNormal);
    data.append("dureeFloraisaon",dureeFloraisaon);
    data.append("file",file);
    data.append("titre",titre);
    data.append("etape1",etape1);
    data.append("etape2",etape2);
    data.append("etape3",etape3);
    data.append("etape4",etape4);
    data.append("etatDeLaTerre",etatDeLaTerre);
    data.append("espacementEntreGraine",espacementEntreGraine);
    
    // data.append("type",type);

    console.log('le nom est ', nom)
    console.log('le description est ', description)
    console.log('le arrosage est ', arrosage)
    console.log('le periodeNormal est ', periodeNormal)
    console.log('le dureeFloraisaon est ', dureeFloraisaon)
    console.log('le file est ', file)
    console.log('le titre est ', titre)
    console.log('le etapae1 est ', etape1)
    console.log('le etatDeLaTerre est ', etatDeLaTerre)
    console.log('le espacementEntreGraine est ', espacementEntreGraine)
    console.log('le semis est ', etape2)
    console.log('le bouture est ', etape3)
    return this.http.post<any>( 
      AUTH_API + 'Ajouterajoutfruilegume/' + `${type}/` + `${iduser}`, data
      )
  }
}
