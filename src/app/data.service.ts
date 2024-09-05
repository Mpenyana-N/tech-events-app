import {Injectable} from '@angular/core';
import {EventModel} from "./model/event-model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  events!: Array<EventModel>;

  getEvent(id: number | undefined) {
    return this.events.find((ev) => ev.id === id);
  }

  constructor() {
    this.events = new Array<EventModel>();
    const event1 = new EventModel();
    event1.id = 1;
    event1.name = 'Tech connect';
    event1.date = '2024/09/26';
    event1.time = '12:00';
    event1.price = 500;
    event1.locations.address = '2000 CBD';
    event1.locations.city = 'Johannesburg';
    event1.locations.country = 'South Africa';

    const event2 = new EventModel();
    event2.id = 2;
    event2.name = 'Tech crunch';
    event2.date = '2024/09/28';
    event2.time = '13:00';
    event2.price = 600;
    event2.locations.address = '2002 Sandton Drive';
    event2.locations.city = 'Capetown';
    event2.locations.country = 'South Africa';

    const event3 = new EventModel();
    event3.id = 3;
    event3.name = 'Tech Roll';
    event3.date = '2025/09/28';
    event3.time = '13:00';
    event3.price = 800;
    event3.locations.address = '2002 Sandton Drive';
    event3.locations.city = 'Capetown';
    event3.locations.country = 'South Africa';

    const event4 = new EventModel();
    event4.id = 4;
    event4.name = 'Tech Over';
    event4.date = '2025/09/28';
    event4.time = '13:00';
    event4.price = 800;
    event4.locations.address = '2002 Sandton Drive';
    event4.locations.city = 'Capetown';
    event4.locations.country = 'South Africa';


    this.events.push(event1);
    this.events.push(event2);
    this.events.push(event3);
    this.events.push(event4);
  }
}
