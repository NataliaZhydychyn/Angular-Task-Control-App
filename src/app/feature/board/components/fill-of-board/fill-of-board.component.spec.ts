import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillOfBoardComponent } from './fill-of-board.component';

describe('FillOfBoardComponent', () => {
  let component: FillOfBoardComponent;
  let fixture: ComponentFixture<FillOfBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillOfBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillOfBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
