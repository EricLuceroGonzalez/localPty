import { Place } from './place.model';

export class PlacesService {
  // constructor() { }
  descript = 'Description-description-description-description-description--description-description-description-description-description';
  shortDes = 'SHORT Description-short-description-short-description-short-description-short-description';

  private places = [
    new Place('place-name-000', 'place' + this.descript, this.shortDes + '-00', '../../../assets/img/DSC_4441.jpg', '10'),
    new Place('place-name-000', 'place' + this.descript, this.shortDes + '-00', '../../../assets/img/DSC_4444.jpg', '10'),
    new Place('place-name-000', 'place' + this.descript, this.shortDes + '-00', '../../../assets/img/DSC_4420.jpg', '10')

  ];

  constructor() { }

  getPlaces() {
    return this.places;
  }


}
