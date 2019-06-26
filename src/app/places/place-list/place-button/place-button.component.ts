import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-button',
  templateUrl: './place-button.component.html',
  styleUrls: ['./place-button.component.css']
})
export class PlaceButtonComponent implements OnInit {
  @Input() place: Place;
  constructor() { }

  ngOnInit() {
  }

}
