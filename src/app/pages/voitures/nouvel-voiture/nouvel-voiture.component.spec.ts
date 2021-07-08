import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelVoitureComponent } from './nouvel-voiture.component';

describe('NouvelVoitureComponent', () => {
  let component: NouvelVoitureComponent;
  let fixture: ComponentFixture<NouvelVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelVoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
