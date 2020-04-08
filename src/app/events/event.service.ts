import { Injectable, EventEmitter } from '@angular/core';
import { Event } from "./event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSelected = new EventEmitter<Event>();
  eventsUpdate = new EventEmitter<Event[]>();

  private events: Event[] = [
    new Event("Course JS", "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quia accusamus laborum molestiae sed, quibusdam omnis nemo veritatis ipsa qui dolore consectetur dolorem alias laboriosam laudantium obcaecati beatae! Dolorem pariatur neque, aliquam voluptatum veniam quos excepturi, error quas, quidem molestiae magni ? Rerum, explicabo dolor.Unde neque provident recusandae alias doloribus possimus nesciunt modi accusantium labore, obcaecati praesentium necessitatibus ? Rerum consequatur at enim temporibus ipsa distinctio error, numquam, sequi voluptatem, a neque! Neque tempore architecto maxime placeat, iure nemo modi optio ex itaque dolores ipsum autem quibusdam eaque! Sed repellat corrupti placeat ipsa commodi, repellendus natus perspiciatis quae suscipit ? Veniam, sint libero!", "https://i.ytimg.com/vi/IHjzyhjKxtc/maxresdefault.jpg"),
    new Event("HTML/CSS", "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quia accusamus laborum molestiae sed, quibusdam omnis nemo veritatis ipsa qui dolore consectetur dolorem alias laboriosam laudantium obcaecati beatae! Dolorem pariatur neque, aliquam voluptatum veniam quos excepturi, error quas, quidem molestiae magni ? Rerum, explicabo dolor.Unde neque provident recusandae alias doloribus possimus nesciunt modi accusantium labore, obcaecati praesentium necessitatibus ? Rerum consequatur at enim temporibus ipsa distinctio error, numquam, sequi voluptatem, a neque! Neque tempore architecto maxime placeat, iure nemo modi optio ex itaque dolores ipsum autem quibusdam eaque! Sed repellat corrupti placeat ipsa commodi, repellendus natus perspiciatis quae suscipit ? Veniam, sint libero!", "https://o7planning.org/ru/11983/cache/images/i/21723546.png"),
    new Event("React", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia accusamus laborum molestiae sed, quibusdam omnis nemo veritatis ipsa qui dolore consectetur dolorem alias laboriosam laudantium obcaecati beatae! Dolorem pariatur neque, aliquam voluptatum veniam quos excepturi, error quas, quidem molestiae magni? Rerum, explicabo dolor. Unde neque provident recusandae alias doloribus possimus nesciunt modi accusantium labore, obcaecati praesentium necessitatibus? Rerum consequatur at enim temporibus ipsa distinctio error, numquam, sequi voluptatem, a neque! Neque tempore architecto maxime placeat, iure nemo modi optio ex itaque dolores ipsum autem quibusdam eaque! Sed repellat corrupti placeat ipsa commodi, repellendus natus perspiciatis quae suscipit? Veniam, sint libero!", "https://repository-images.githubusercontent.com/19872456/05dca500-f010-11e9-9588-a96554294e4e"),
  ]

  getEvents(): Event[] {
    return this.events.slice();
  }

  getSingleEvent(index: number): Event {
    return this.events[index];
  }

  addEvent(data: Event) {
    this.events.push(data);
    this.eventsUpdate.emit(this.events.slice());
  }

  constructor() { }
}

