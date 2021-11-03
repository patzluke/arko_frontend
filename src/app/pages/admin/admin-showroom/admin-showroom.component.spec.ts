import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowroomComponent } from './admin-showroom.component';

describe('AdminShowroomComponent', () => {
  let component: AdminShowroomComponent;
  let fixture: ComponentFixture<AdminShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
