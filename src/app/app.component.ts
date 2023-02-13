import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './_services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  title = 'FrontendWeb';
  sideBarOpen = true;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private storageService: StorageService, private route:Router) {
  
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    //==============ngIF cacher sideNav et Header===============
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      //RECUPERATION DU ROLE DE L'UTILISATEUR CONNECTE
      this.roles = this.storageService.getUser().roles;
    }
    else{
      this.route.navigateByUrl('/connexion');
    }
    //==============ngIF cacher sideNav et Header===============
  }
}
