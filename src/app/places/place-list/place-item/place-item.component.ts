import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})

export class PlaceItemComponent implements OnInit {
  @Input() place: Place;
  @Output() placeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    console.log(this.place.imagePath);
  }

  onSelectedItem() {
    console.log('onSelectedItem()');
    this.placeSelected.emit();
  }
}
