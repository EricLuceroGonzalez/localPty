import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceButtonComponent } from './place-button.component';

describe('PlaceButtonComponent', () => {
  let component: PlaceButtonComponent;
  let fixture: ComponentFixture<PlaceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
