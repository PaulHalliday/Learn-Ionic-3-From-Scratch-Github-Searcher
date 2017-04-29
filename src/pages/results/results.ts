import { Component } from '@angular/core';
import { IonicPage, NavParams, LoadingController, Loading} from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';
import { User } from '../../models/user';
import { Repository } from '../../models/repository';

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  username: string;
  user: User;
  repositories: Repository[];

  constructor(private loading: LoadingController, private navParams: NavParams, private github: GithubProvider) {

  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    this.getUserInformation();
    //this.getMockUserInformation();
    //this.getMockRepositoryInformation();
  }

  getUserInformation(): void {
    let loader = this.showLoading();
    this.github.getUserInformation(this.username).subscribe(data => this.user = data);
    this.github.getRepositoryInformation(this.username).subscribe(data => this.repositories = data);
    this.dismissLoading(loader);
  }


  showLoading() {
    let loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    return loader;
  }

  dismissLoading(loader: Loading){
    loader.dismiss();
  }

  getMockRepositoryInformation(): void {
    this.github.mockGetRepositoryInformation(this.username).subscribe(data => {
      this.repositories = data;
    })
  }

  getMockUserInformation(): void {
    this.github.mockGetUserInformation(this.username).subscribe((userData: User) => {
      this.user = userData;
    })
  }

}
