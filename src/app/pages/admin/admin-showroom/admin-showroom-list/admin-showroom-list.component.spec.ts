import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowroomListComponent } from './admin-showroom-list.component';

describe('AdminShowroomListComponent', () => {
  let component: AdminShowroomListComponent;
  let fixture: ComponentFixture<AdminShowroomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowroomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowroomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
