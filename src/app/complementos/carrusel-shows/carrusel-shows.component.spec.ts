import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselShowsComponent } from './carrusel-shows.component';

describe('CarruselShowsComponent', () => {
  let component: CarruselShowsComponent;
  let fixture: ComponentFixture<CarruselShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselShowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
