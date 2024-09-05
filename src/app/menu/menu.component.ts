import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {EventModel} from "../model/event-model";

@Component({
  selector: 'mn-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{


  constructor(private router: Router) {
  }

  ngOnInit(): void {


  }

  navigateToEvents() {
    this.router.navigate(['events']);
  }

}
