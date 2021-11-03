import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventsAddComponent } from './admin-events-add.component';

describe('AdminEventsAddComponent', () => {
  let component: AdminEventsAddComponent;
  let fixture: ComponentFixture<AdminEventsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEventsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
