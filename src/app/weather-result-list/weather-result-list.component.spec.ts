import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherResultListComponent } from './weather-result-list.component';

describe('WeatherResultListComponent', () => {
  let component: WeatherResultListComponent;
  let fixture: ComponentFixture<WeatherResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
