import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";

import {EventModel} from "../model/event-model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mn-sessions',
  standalone: true,
  imports: [],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.css'
})
export class SessionsComponent implements OnInit {

 @Input() event!: EventModel | any;

  constructor(private  dataService: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.event = this.dataService.getEvent(+this.route.snapshot.params['id']);

  }

}
