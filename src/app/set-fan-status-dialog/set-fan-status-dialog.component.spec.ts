import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFanStatusDialogComponent } from './set-fan-status-dialog.component';

describe('SetFanStatusDialogComponent', () => {
  let component: SetFanStatusDialogComponent;
  let fixture: ComponentFixture<SetFanStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetFanStatusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFanStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
