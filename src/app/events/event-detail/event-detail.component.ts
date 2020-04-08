import { Component, OnInit, Input } from '@angular/core';
import { Event } from "../event.model";
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(private eventService: EventService, private route: ActivatedRoute) { }
  eventDetail: Event;
  index: number;


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = params["id"];
      this.eventDetail = this.eventService.getSingleEvent(this.index);
    })

  }

}
