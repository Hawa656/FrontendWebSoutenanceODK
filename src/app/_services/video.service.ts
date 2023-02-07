import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  api = 'http://localhost:8080/api/video';

  constructor(private http: HttpClient) { } 

  // AjoutVideo(file: File, videorecu: string, idLegumeFruit:any): Observable<any>{
  //   return this.http.post(`${this.api}/Ajouter/${idLegumeFruit}`),

  //   {
  //     file,
  //     videorecu
  //   },
  //   httpOptions
  // };
}
