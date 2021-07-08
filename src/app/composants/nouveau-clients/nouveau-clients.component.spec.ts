import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauClientsComponent } from './nouveau-clients.component';

describe('NouveauClientsComponent', () => {
  let component: NouveauClientsComponent;
  let fixture: ComponentFixture<NouveauClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
