import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {EventModel} from "../model/event-model";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'mn-tech-events',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tech-events.component.html',
  styleUrl: './tech-events.component.css'
})
export class TechEventsComponent implements OnInit {

  events!: Array<EventModel>;
  selectedEvent!: EventModel | any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.events = this.dataService.events;
  }

}
