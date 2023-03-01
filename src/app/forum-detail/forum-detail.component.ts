import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../_services/forum.service';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.scss']
})
export class ForumDetailComponent {
  idquestion:any
  User:any
  form: any = {
    
    reponse:null,
    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  id: any
  reponse:any
  constructor(private route : ActivatedRoute,private forumService:ForumService, private userService:UserService, private storageService: StorageService) { }

  ngOnInit() {

    this.User = this.storageService.getUser();
this.lesReponsesPArQuestion()
}

// POUR RECUPERER LA DATE SEPAREMENT
getFormattedDate(timestamp: number): string {
  const date = new Date(timestamp);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
// POUR RECUPERER L'HEURE SEPAREMENT
getFormattedTime(timestamp: number): string {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

// AJOUTER REPONSE
onSubmit(): void {
  this.id= this.route.snapshot.params["id"]
  this.lesReponsesPArQuestion();
  const { reponse} = this.form;
   console.log('dfghjklmque reponse'+ this.id);
  this.forumService.PostReponse(reponse, this.id,this.User.id).subscribe({
    next: data => {
      this.lesReponsesPArQuestion();
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

    //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
    back(): void {
      window.history.back()
    }

    lesReponsesPArQuestion(){
      this.id= this.route.snapshot.params["id"]
  
      this.forumService.getReponsesParQuestion(this.id).subscribe(data=>{
        
        this.reponse = data;
        
         
      })
    }


}
