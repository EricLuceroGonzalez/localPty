import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-show',
  templateUrl: './place-show.component.html',
  styleUrls: ['./place-show.component.css']
})
export class PlaceShowComponent implements OnInit {
  aPlaceShow = Place;

  constructor() { }

  ngOnInit() {
  }

}
