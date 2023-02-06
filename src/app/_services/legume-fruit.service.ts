import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/legumefruit/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LegumeFruitService {

  constructor(private http: HttpClient) { }

AjoutLegumeFruit(nom: string, description: string, arrosage: string, periodeNormal: string, dureeFloraisaon: string, file: File, titre: string, descriptiont: string, etatDeLaTerre: string, espacementEntreGraine: string, semis: boolean,bouture: boolean): Observable<any> {
    return this.http.post(
      AUTH_API + 'Ajouterajoutfruilegume',
      {
        nom,
        description,
        arrosage,
        periodeNormal,
        dureeFloraisaon,
        file,
        titre,
        descriptiont,
        etatDeLaTerre,
        espacementEntreGraine,
        semis,
        bouture
      },
      httpOptions
    );
  }
}
