import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { User } from '../../models/user';
import { Repository } from '../../models/repository';

import { USER_LIST } from '../../mocks/user';
import { REPOSITORY_LIST } from '../../mocks/repository';

@Injectable()
export class GithubProvider {
  baseUrl: string = 'https://api.github.com/users';
  reposUrl: string = 'repos';

  constructor(private http: Http) {
  }

  /*
    Returns mock user information
  */
  mockGetUserInformation(username: string):Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }

  /*
    Returns mock repository information
  */
  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }
  /*
    Returns user information for the username parameter.
  */
  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`).map((data: Response) => data.json());
  }

  /* 
    Returns user repository information for the username parameter
  */
  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`).map((data: Response) => data.json() as Repository[]);
  }

}
