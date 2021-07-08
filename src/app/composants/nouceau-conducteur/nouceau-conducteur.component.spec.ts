import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouceauConducteurComponent } from './nouceau-conducteur.component';

describe('NouceauConducteurComponent', () => {
  let component: NouceauConducteurComponent;
  let fixture: ComponentFixture<NouceauConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouceauConducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouceauConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
