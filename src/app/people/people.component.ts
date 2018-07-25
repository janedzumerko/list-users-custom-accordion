import {AfterContentInit, Component, ContentChildren, OnDestroy, OnInit, QueryList} from '@angular/core';
import {PersonComponent} from '../person/person.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnDestroy, AfterContentInit {

  @ContentChildren(PersonComponent) accordions: QueryList<PersonComponent>;
  private subscriptions = [];

  private _accordions: any = [];

  constructor() {
  }

  ngAfterContentInit() {
    this._accordions = this.accordions;
    this.accordions.changes.subscribe(accordions => {
      this._accordions = accordions;
      this.removeSubscriptions();
      this.addSubscriptions();
    });
  }

  addSubscriptions() {
    this._accordions.forEach(a => {
      const subscription = a.toggleAccordion.subscribe((e) => {
        this.toggleAccordion(a);
        // if (e) {
        //   a.active = true;
        //   this.toggleAccordion(a);
        // } else {
        //   a.active = false;
        //   this.toggleAccordion(a);
        // }
      });
      this.subscriptions.push(subscription);
    });
  }

  removeSubscriptions() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  toggleAccordion(accordion) {
    if (!accordion.active) {
      // to close all active accordions
      this.accordions.forEach(a => a.active = false);
    }
    // set active accordion
    accordion.active = !accordion.active;
  }

  ngOnDestroy() {
    this.removeSubscriptions();
  }


}
