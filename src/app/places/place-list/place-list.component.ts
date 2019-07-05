import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  // @Output() placeWasSelected = new EventEmitter<Place>();
  places: Place[];

  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
    console.log(this.places);

  }

  // onPlaceListSelected(place: Place) {
  //   console.log('onPlaceListSelected');
  //   this.placeWasSelected.emit(place);
  // }
}
