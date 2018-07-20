import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPerson} from './IPerson';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpc: HttpClient) {
  }

  /*
   * get data from server
   *
   * @return {Observable<IPerson[]>}
   */
  public getPeople(): Observable<IPerson[]> {
    return this.httpc.get<IPerson[]>('http://localhost:3000/posts');
  }
}
