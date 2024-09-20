import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonDeFiestasComponent } from './salon-de-fiestas.component';

describe('SalonDeFiestasComponent', () => {
  let component: SalonDeFiestasComponent;
  let fixture: ComponentFixture<SalonDeFiestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalonDeFiestasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonDeFiestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
