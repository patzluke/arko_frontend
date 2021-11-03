import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowroomAddComponent } from './admin-showroom-add.component';

describe('AdminShowroomAddComponent', () => {
  let component: AdminShowroomAddComponent;
  let fixture: ComponentFixture<AdminShowroomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowroomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowroomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
