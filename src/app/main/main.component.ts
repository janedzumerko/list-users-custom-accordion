import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPerson} from '../IPerson';
import {PeopleService} from '../people.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public people: Array<IPerson> = [];
  private httpSubscription: Subscription;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.httpSubscription = this.peopleService.getPeople().subscribe(people => {
      this.people = people;
    });
  }

  ngOnDestroy() {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }

}
