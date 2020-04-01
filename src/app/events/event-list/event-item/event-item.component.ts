import { Component, OnInit, Input } from '@angular/core';
import { Event } from "../../event.model";

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() myEvent: Event;
  constructor() { }

  ngOnInit(): void {
  }

}
