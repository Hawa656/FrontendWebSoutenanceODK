import { Component, OnInit } from '@angular/core';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { VideoService } from '../_services/video.service';

@Component({
  selector: 'app-ajout-tutoriel',
  templateUrl: './ajout-tutoriel.component.html',
  styleUrls: ['./ajout-tutoriel.component.scss']
})
export class AjoutTutorielComponent implements OnInit{
  video:any
  legumeFruit:any
  fruitLegume:any
  constructor(private legumeFruitService: LegumeFruitService,private videoService: VideoService){}
  ngOnInit() {
    this.touteLesVideo()

    this.legumeFruitService.GetLegumeFruit().subscribe(data=>{
      this.fruitLegume = data;
      console.log(this.fruitLegume)})
     
  }
  formT: any = {
    titre: null,
    espacementEntreGraine: null,
   
    idLegumeFruit: null,
  };

  forms: any = {
    titre: '',
    espacementEntreGraine: '',
   
    idLegumeFruit: '',
  };
  file: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  //AJOUTER TUTO
  onSubmitTuto(): void {
    const { 
      titre,
      espacementEntreGraine,
      legumeFruit,
    } = this.formT;

    this.forms.titre = titre
    this.forms.espacementEntreGraine = espacementEntreGraine


    console.log('idddddddddddddddddddd'+legumeFruit)
    this.legumeFruitService.PostTutoriel(this.forms, legumeFruit).subscribe({

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

  touteLesVideo(){
    this.videoService.getVideo().subscribe(data=>{
      this.video = data;
      console.log(this.legumeFruit)
    })

  }

}
