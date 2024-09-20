import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDeVeranoComponent } from './cursos-de-verano.component';

describe('CursosDeVeranoComponent', () => {
  let component: CursosDeVeranoComponent;
  let fixture: ComponentFixture<CursosDeVeranoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosDeVeranoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosDeVeranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
