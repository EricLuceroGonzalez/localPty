import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { People } from '../people.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  allPeople: People[];

  constructor(
    private PeopleService: PeopleService
  ) { }

  ngOnInit(  ) {
    this.allPeople = this.PeopleService.getAllPeople();
  }

}
