import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  isLoggedIn = false;
  errorMessage = '';

  user:any
  


  constructor(private router: Router, private authService: AuthService, private userService: StorageService) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();

    this.user = this.userService.getUser();
   
  }

  deconnexion(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.userService.clean();
         this.router.navigate(['/connexion']);
         this.reloadPage()
      },
      error: err => {
        console.log(err);
      }
    });

  }
  
  initializeApp() {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('connexion');
    }
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
// POUR RECHARGER LA PAGE AUTOMATIQUEMENT
  reloadPage(): void {
    window.location.reload();
  }
  
}














// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../_services/auth.service';
// import { StorageService } from '../_services/storage.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
// })
// export class HeaderComponent implements OnInit {
//   @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

//   constructor(private router: Router, private authService: AuthService, private userService:StorageService) {
//      this.initializeApp();
//   }

//   ngOnInit(): void {


//   }
//   deconnexion(): void {
//     this.authService.logout().subscribe({
//       next: res => {
//         console.log(res);
//         this.userService.clean();
//         window.location.reload();
//         this.router.navigate(['/connexion'])
//       },
//       error: err => {
//         console.log(err);
//       }
//     });
//   }

//   initializeApp(){
//     this.router.navigateByUrl("connexion")
//   }

//   toggleSidebar() {
//     this.toggleSidebarForMe.emit();
//   }
// }
