import { Component, OnInit } from '@angular/core';
import { Event } from "../event.model";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [
    new Event("Course JS", "promise and fetch", "https://i.ytimg.com/vi/IHjzyhjKxtc/maxresdefault.jpg"),
    new Event("HTML/CSS", "list in HTML", "https://o7planning.org/ru/11983/cache/images/i/21723546.png"),
    new Event("React", "work with routing components", "https://repository-images.githubusercontent.com/19872456/05dca500-f010-11e9-9588-a96554294e4e"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
