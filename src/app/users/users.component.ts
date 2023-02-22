import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  searchText:any;
  textFiltree:any
  paginateNumber!:number
  listUser:any
  listAdmin:any
  user:any

  form: any = {
    nom: null,
    prenom:null,
    numero:null,
    email: null,
    password: null,
    confirmPassword:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor( private authService: AuthService,private storageService: StorageService, private userService: UserService) { }
 
  ngOnInit() {
    this.ListUser()
    this.getListUser()
    this.getlistAdmin()
  }


  ListUser(){
    this.userService.getUsers().subscribe(data=>{
      this.user = data;
      console.log(this.user)
     })
  
  }

  getListUser(){
    this.userService.getListUserByRole("user").subscribe(data => {
      this.listUser = data
    });
  }
  
  getlistAdmin(){
    this.userService.getListUserByRole("admin").subscribe(data => {
      this.listAdmin = data
    });
  }


  onSubmit(): void {
    const { nom,prenom,numero, email, password,confirmPassword } = this.form;
    this.authService.register(nom,prenom, numero, email, password, confirmPassword).subscribe({
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
    
    // FILTRAGE LISTES DES ADMIN ET USER
    this.userService.getListUserByRole(this.textFiltree).subscribe(data=>{
      this.textFiltree = data;
     
      console.log(this.textFiltree)
  }
    )
  }
}
