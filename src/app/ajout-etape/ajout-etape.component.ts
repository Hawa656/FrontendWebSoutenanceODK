import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-ajout-etape',
  templateUrl: './ajout-etape.component.html',
  styleUrls: ['./ajout-etape.component.scss']
})
export class AjoutEtapeComponent implements OnInit {

  tutoriel: any;
  tutoriel1: any;
  file: any;
  form: any = {
    file: null,
    etape: null,
    titre: null
  };

  
  // file: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private legumeFruitService: LegumeFruitService, private http: HttpClient) { }

  ngOnInit(): void {
    this.legumeFruitService.GetTUtoriel().subscribe(data => {
      this.tutoriel = data;
      console.log(this.tutoriel);
    });
  }





  filechange(event: any) {
    this.file = event.target['files'][0];
    console.log(event);
  }

  onSubmit(): void {
    const { titre, etape } = this.form;
    // this.form.tutoriel
    this.legumeFruitService.PostEtape(titre, this.file, etape, this.tutoriel1).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
