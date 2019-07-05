import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  aPlace: Place[];

  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit(  ) {
    this.aPlace = this.placesService.getPlaces();
  }

}
