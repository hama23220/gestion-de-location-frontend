import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEntretienVoitureComponent } from './detail-entretien-voiture.component';

describe('DetailEntretienVoitureComponent', () => {
  let component: DetailEntretienVoitureComponent;
  let fixture: ComponentFixture<DetailEntretienVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEntretienVoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEntretienVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
