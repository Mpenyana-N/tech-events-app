import {Injectable} from '@angular/core';
import {EventModel, Session} from "./model/event-model";

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

    const session1 = new Session();

    session1.id = 1;
    session1.name = 'Getting the most out of your dev team';
    session1.level = 'intermediate';
    session1.duration = '2hrs';
    session1.presenter = 'Elon Musk';
    session1.abstract = 'We all know that our dev teams work hard, but with \n' +
      '          the right management they can be even more productive, without \n' +
      '          overworking them. In this session I\'ll show you how to get the \n' +
      '          best results from the talent you already have on staff.';
    session1.voters = ['John', 'zipler', 'troy'];

    const session2 = new Session();

    session2.id = 2;
    session2.name = 'Angular 4 Performance Metrics';
    session2.level = 'Advanced';
    session2.duration = '2hrs';
    session2.presenter = 'Rob Wormald';
    session2.abstract = 'Angular 4 Performance is hot. In this session, we\'ll see \n' +
      '          how Angular gets such great performance by preloading data on \n' +
      '          your users devices before they even hit your site using the \n' +
      '          new predictive algorithms and thought reading software \n' +
      '          built into Angular 4.';
    session2.voters = [];



    event1.sessions.push(session1);
    event1.sessions.push(session2);


    this.events.push(event1);
    this.events.push(event2);
    this.events.push(event3);
    this.events.push(event4);





  }
}
