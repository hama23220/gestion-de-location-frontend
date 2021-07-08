import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVoitureComponent } from './page-voiture.component';

describe('PageVoitureComponent', () => {
  let component: PageVoitureComponent;
  let fixture: ComponentFixture<PageVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
