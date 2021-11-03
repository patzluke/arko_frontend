import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventsEditComponent } from './admin-events-edit.component';

describe('AdminEventsEditComponent', () => {
  let component: AdminEventsEditComponent;
  let fixture: ComponentFixture<AdminEventsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEventsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
