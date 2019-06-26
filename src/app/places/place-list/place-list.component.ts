import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  @Output() placeWasSelected = new EventEmitter<Place>();

  // pathExample = '/home/ericlucero/Dropbox/web-develop/00-AngularProyects/localPty/src/app/media/clown.png';
  descript = 'Description-description-description-description-description--description-description-description-description-description';
  shortDes = 'SHORT Description-short-description-short-description-short-description-short-description';
  places: Place[] = [
    new Place('place-name-000', 'place' + this.descript, this.shortDes + '-00', '../../../assets/img/DSC_4441.jpg', '10'),
    new Place('place-name-01000', 'place' + this.descript, this.shortDes + '-01', '../../../assets/img/DSC_4444.jpg', '9'),
    new Place('place-name-0222222', 'place' + this.descript, this.shortDes + '-02', '../../../assets/img/DSC_4461.jpg', '8'),
    new Place('place-name-033', 'place' + this.descript, this.shortDes + '-03', '../../../assets/img/DSC_4458.jpg', '7'),
    new Place('place-name-004', 'place' + this.descript, this.shortDes + '-04', '../../../assets/img/DSC_4462.jpg', '6'),
    new Place('place-name-05', 'place' + this.descript, this.shortDes + '-05', '../../../assets/img/DSC_4465.jpg', '5')
  ];
  constructor() { }

  ngOnInit() {
  }

  onPlaceListSelected(place: Place) {
    console.log('onPlaceListSelected');
    this.placeWasSelected.emit(place);
  }
}
