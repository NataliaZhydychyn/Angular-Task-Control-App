import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillOfDashboardComponent } from './fill-of-dashboard.component';

describe('FillOfDashboardComponent', () => {
  let component: FillOfDashboardComponent;
  let fixture: ComponentFixture<FillOfDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillOfDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillOfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
