import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {EventModel} from "../model/event-model";
import {CommonModule} from "@angular/common";
import {DataService} from "../data.service";

@Component({
  selector: 'mn-create-event',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent implements OnInit{

  event!: EventModel | any;

  formEvent!: EventModel;



  constructor(private router: Router,
              private dataService: DataService,
              private route: ActivatedRoute) {
  }



  ngOnInit(): void {
    this.formEvent = Object.assign({}, this.event);
    this.formEvent.locations = Object.assign({}, this.formEvent.locations);
  }

  navigateToEvents() {
    this.router.navigate(['events']);
  }

  onSubmit() {
    this.dataService.addNewEvent(this.formEvent).subscribe((event) => {
      this.router.navigate(['events']);
    })
    console.log(this.formEvent.locations);
  }

}
