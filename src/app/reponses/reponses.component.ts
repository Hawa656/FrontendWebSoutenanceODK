import { Component } from '@angular/core';
import { ReponsesService } from '../_services/reponses.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.scss']
})
export class ReponsesComponent {

  roles: string[] = [];

  User : any

  form: any = {
    reponse: null,

  };
  file: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private storageService: StorageService, private reponseService: ReponsesService){}

  ngOnInit() {
    this.User = this.storageService.getUser();
     }
  
     filechange(event: any) {
      this.file = event.target['files'][0];
      console.log(event)
    }

    onSubmit(): void {
      const { reponse,idquestion} = this.form;
      this.reponseService.PostReponse(reponse,this.User.id,idquestion).subscribe({
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

