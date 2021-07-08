import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauModeleComponent } from './nouveau-modele.component';

describe('NouveauModeleComponent', () => {
  let component: NouveauModeleComponent;
  let fixture: ComponentFixture<NouveauModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
