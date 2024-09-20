import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsInfantilesCdmxComponent } from './shows-infantiles-cdmx.component';

describe('ShowsInfantilesCdmxComponent', () => {
  let component: ShowsInfantilesCdmxComponent;
  let fixture: ComponentFixture<ShowsInfantilesCdmxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowsInfantilesCdmxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsInfantilesCdmxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
