import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesModelesComponent } from './pages-modeles.component';

describe('PagesModelesComponent', () => {
  let component: PagesModelesComponent;
  let fixture: ComponentFixture<PagesModelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesModelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesModelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
