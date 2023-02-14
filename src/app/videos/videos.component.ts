import { Component,OnInit } from '@angular/core';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { StorageService } from '../_services/storage.service';
import { VideoService } from '../_services/video.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit{

  legumeFruit: any
  roles: string[] = [];
  video : any
  qbq: any='fruit'
  AOUA:any;
  textFiltree:any
  selectedOption: any;
  // pour la barre de recherche:
  searchText:any;
  videoo: any;
  videoer: any;
  User : any

  form: any = {
    file: null,
    videorecu: null,
    
  };
  file: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private videoService: VideoService,  private storageService: StorageService, private legumeFruitService: LegumeFruitService) { }
 
  ngOnInit() {
    this.touteLesVideo()
     this.User = this.storageService.getUser();
  
  }

  filechange(event: any) {
    this.file = event.target['files'][0];
    console.log(event)
  }

  // this.User = this. storageService.getUser();

  onSubmit(): void {
    const { 
      videorecu,
      legumeFruit,
    } = this.form;
    console.log(legumeFruit)
    var video=    [{"titre":videorecu}]


    console.log(this.form)
    this.videoService.AjoutVideo(this.file,video, legumeFruit, this.User.id ).subscribe({
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

changement(){
  console.log("ertyui"+this.textFiltree);
  this.videoService.getFiltrerParFruitEtLegume(this.textFiltree).subscribe(data=>{
    this.video = data;
    console.log("filtre")
    console.log(this.video)
}
  )
}

// =================SUPPRIMER====================
openModal(nom : any, id : number) {
  Swal.fire({
    title: nom,
    text: " Voulez-vous vraiment supprimer ce fruit ? ",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#399C28',
    cancelButtonColor: '#d33',
    cancelButtonText : "NON",
    confirmButtonText: 'OUI'
  }).then((result) => {
    if (result.isConfirmed) {
      //suppp
      this.legumeFruitService.supprimerLegumesFruits(id).subscribe(data => {
        this.touteLesVideo()

      console.log(id)
      Swal.fire(
        'Supprimer!',
        'supprimé avec succès'
      );
    });

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

