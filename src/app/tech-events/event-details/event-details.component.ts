import {Component, OnInit} from '@angular/core';
import {EventModel} from "../../model/event-model";
import {DataService} from "../../data.service";
import {ActivatedRoute} from "@angular/router";
import {SessionsComponent} from "../../sessions/sessions.component";

@Component({
  selector: 'mn-event-details',
  standalone: true,
  imports: [SessionsComponent],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit{

  event!: EventModel | any;

  selectedEvent!: EventModel | any;

  constructor(private dataService: DataService,
  private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.event = this.dataService.getEvent(+this.route.snapshot.params['id']);
    this.selectedEvent = this.dataService.events.find((selected) => selected.id === this.event.id);
  }



}
