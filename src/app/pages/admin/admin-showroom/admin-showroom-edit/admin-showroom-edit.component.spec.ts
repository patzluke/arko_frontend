import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowroomEditComponent } from './admin-showroom-edit.component';

describe('AdminShowroomEditComponent', () => {
  let component: AdminShowroomEditComponent;
  let fixture: ComponentFixture<AdminShowroomEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowroomEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowroomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
