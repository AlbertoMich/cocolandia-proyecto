import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravanasInfantilesComponent } from './caravanas-infantiles.component';

describe('CaravanasInfantilesComponent', () => {
  let component: CaravanasInfantilesComponent;
  let fixture: ComponentFixture<CaravanasInfantilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaravanasInfantilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaravanasInfantilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
