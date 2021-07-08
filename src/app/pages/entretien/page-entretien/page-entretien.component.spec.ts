import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEntretienComponent } from './page-entretien.component';

describe('PageEntretienComponent', () => {
  let component: PageEntretienComponent;
  let fixture: ComponentFixture<PageEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
