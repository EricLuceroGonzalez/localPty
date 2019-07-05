import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalKidsComponent } from './local-kids.component';

describe('LocalKidsComponent', () => {
  let component: LocalKidsComponent;
  let fixture: ComponentFixture<LocalKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
