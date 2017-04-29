import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { Repository } from '../../models/repository';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  username: string = "PaulHalliday"
  user: User


  constructor(private navController: NavController) {
  }

  searchAgain(): void {
    this.user = null;
    this.username = "";
  }

  getUserInformation(): void {

    this.navController.push('ResultsPage', {
      username: this.username
    })

    // this.github.mockGetUserInformation(this.username).subscribe((data: User) => {
    //   this.user = data;
    //   console.log(this.user);
    // })

    // this.github.getUserInformation(this.username).subscribe((data: User) => {
    //   this.user = data;
    // });

    // this.github.getRepositoryInformation(this.username).subscribe((data: Repository[]) => {
    //   this.repositories = data;
    //   console.log(this.repositories);
    // });
  }
}
