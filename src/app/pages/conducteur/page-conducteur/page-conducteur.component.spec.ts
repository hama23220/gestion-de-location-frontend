import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConducteurComponent } from './page-conducteur.component';

describe('PageConducteurComponent', () => {
  let component: PageConducteurComponent;
  let fixture: ComponentFixture<PageConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
