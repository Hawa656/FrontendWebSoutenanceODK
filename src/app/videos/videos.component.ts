import { Component } from '@angular/core';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { StorageService } from '../_services/storage.service';
import { VideoService } from '../_services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  legumeFruit: any
  roles: string[] = [];

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
    this.legumeFruitService.GetLegumeFruit().subscribe(data=>{
      this.legumeFruit = data;
      console.log(this.legumeFruit)
     })

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



}

