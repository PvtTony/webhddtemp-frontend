import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveTempDetailComponent } from './drive-temp-detail.component';

describe('DriveTempDetailComponent', () => {
  let component: DriveTempDetailComponent;
  let fixture: ComponentFixture<DriveTempDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveTempDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveTempDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
