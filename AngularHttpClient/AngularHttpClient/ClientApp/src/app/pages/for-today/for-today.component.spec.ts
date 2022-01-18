import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTodayComponent } from './for-today.component';

describe('ForTodayComponent', () => {
  let component: ForTodayComponent;
  let fixture: ComponentFixture<ForTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
