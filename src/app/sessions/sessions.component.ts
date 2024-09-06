import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";

import {EventModel} from "../model/event-model";

@Component({
  selector: 'mn-sessions',
  standalone: true,
  imports: [],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.css'
})
export class SessionsComponent implements OnInit {

 @Input() event!: EventModel;

  constructor(private  dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
