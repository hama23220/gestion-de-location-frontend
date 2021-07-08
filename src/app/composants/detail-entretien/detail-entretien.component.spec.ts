import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEntretienComponent } from './detail-entretien.component';

describe('DetailEntretienComponent', () => {
  let component: DetailEntretienComponent;
  let fixture: ComponentFixture<DetailEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
