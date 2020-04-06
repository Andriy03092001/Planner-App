import { Injectable, EventEmitter } from '@angular/core';
import { Event } from "./event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSelected = new EventEmitter<Event>();
  eventsUpdate = new EventEmitter<Event[]>();

  private events: Event[] = [
    new Event("Course JS", "promise and fetch", "https://i.ytimg.com/vi/IHjzyhjKxtc/maxresdefault.jpg"),
    new Event("HTML/CSS", "list in HTML", "https://o7planning.org/ru/11983/cache/images/i/21723546.png"),
    new Event("React", "work with routing components", "https://repository-images.githubusercontent.com/19872456/05dca500-f010-11e9-9588-a96554294e4e"),
  ]

  getEvents(): Event[] {
    return this.events.slice();
  }

  addEvent(data: Event) {
    this.events.push(data);
    this.eventsUpdate.emit(this.events.slice());
  }

  constructor() { }
}

