import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {IPerson} from '../IPerson';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  // data is received from MainComponent
  @Input() person: IPerson;

  @Input() active = false;

  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }

  onClick(event) {
    event.preventDefault();
    this.toggleAccordion.emit(this.active);
  }

  // close(event) {
  //   event.preventDefault();
  //   this.toggleAccordion.emit(true);
  // }
  //
  // open(event) {
  //   event.preventDefault();
  //   this.toggleAccordion.emit(false);
  // }

  ngOnInit() {
  }

}
