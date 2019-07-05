import { Injectable } from '@angular/core';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  descript = 'Description-description-description-description-description--description-description-description-description-description';
  shortDes = 'SHORT Description-short-description-short-description-short-description-short-description';

  private allPeople: People[] = [
    new People('people-name-000', 'people' + this.descript, this.shortDes + '-00', '../../../assets/img/DSC_4441.jpg', '10'),
    new People('people-name-01000', 'people' + this.descript, this.shortDes + '-01', '../../../assets/img/DSC_4444.jpg', '9'),
    new People('people-name-0222222', 'people' + this.descript, this.shortDes + '-02', '../../../assets/img/DSC_4461.jpg', '8'),
    new People('people-name-033', 'people' + this.descript, this.shortDes + '-03', '../../../assets/img/DSC_4458.jpg', '7'),
    new People('people-name-004', 'people' + this.descript, this.shortDes + '-04', '../../../assets/img/DSC_4462.jpg', '6'),
    new People('people-name-05', 'people' + this.descript, this.shortDes + '-05', '../../../assets/img/DSC_4465.jpg', '5')
  ];

  constructor() { }

  getAllPeople() {
    return this.allPeople;
  }
}
