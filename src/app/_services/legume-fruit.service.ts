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
  api = 'http://localhost:8080/api/TypeLegumeFruit';

  constructor(private http: HttpClient) { }

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
  

  PostLegumeFruit(nom: string, description: string, arrosage: string, periodeNormal: string, dureeFloraisaon: string, file: File, titre: string, descriptiont: string, etatDeLaTerre: string, espacementEntreGraine: string, semis: string ,bouture: string, type:string):Observable<any> {
    let data = new FormData();
    data.append("nom",nom);
    data.append("description",description);
    data.append("arrosage",arrosage);
    data.append("periodeNormal",periodeNormal);
    data.append("dureeFloraisaon",dureeFloraisaon);
    data.append("file",file);
    data.append("titre",titre);
    data.append("descriptiont",descriptiont);
    data.append("etatDeLaTerre",etatDeLaTerre);
    data.append("espacementEntreGraine",espacementEntreGraine);
    data.append("semis",semis);
    data.append("bouture",bouture);
    // data.append("type",type);

    console.log('le nom est ', nom)
    console.log('le description est ', description)
    console.log('le arrosage est ', arrosage)
    console.log('le periodeNormal est ', periodeNormal)
    console.log('le dureeFloraisaon est ', dureeFloraisaon)
    console.log('le file est ', file)
    console.log('le titre est ', titre)
    console.log('le descriptiont est ', descriptiont)
    console.log('le etatDeLaTerre est ', etatDeLaTerre)
    console.log('le espacementEntreGraine est ', espacementEntreGraine)
    console.log('le semis est ', semis)
    console.log('le bouture est ', bouture)
    return this.http.post<any>( 
      AUTH_API + 'Ajouterajoutfruilegume/' + `${type}`, data
      )
  }
}
