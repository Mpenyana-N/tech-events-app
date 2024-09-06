import { Component } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'mn-create-event',
  standalone: true,
  imports: [],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {

  constructor(private router: Router) {
  }


  navigateToEvents() {
    this.router.navigate(['events']);
  }

}
