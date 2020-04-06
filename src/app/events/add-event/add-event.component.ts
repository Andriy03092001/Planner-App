import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from "../event.model";


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  nameEvent: string;
  descriptionEvent: string;
  imageEvent: string;

  add() {
    console.log(this.nameEvent, this.descriptionEvent, this.imageEvent);
    const newEvent = new Event(this.nameEvent, this.descriptionEvent, this.imageEvent);
    this.eventService.addEvent(newEvent);
  }


  ngOnInit(): void {
  }

}
