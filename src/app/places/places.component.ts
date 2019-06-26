import { Component, OnInit } from '@angular/core';
import { Place } from './place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  placeSelected = Place;

  constructor() { }

  ngOnInit() {
  }

}
