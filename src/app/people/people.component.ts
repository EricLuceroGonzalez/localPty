import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { People } from './people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  allPeople: People[];

  constructor(
    private PeopleService: PeopleService
  ) { }

  ngOnInit(  ) {
    this.allPeople = this.PeopleService.getAllPeople();
  }
}
