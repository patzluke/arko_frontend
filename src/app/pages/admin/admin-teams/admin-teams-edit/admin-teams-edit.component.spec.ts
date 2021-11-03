import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamsEditComponent } from './admin-teams-edit.component';

describe('AdminTeamsEditComponent', () => {
  let component: AdminTeamsEditComponent;
  let fixture: ComponentFixture<AdminTeamsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTeamsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeamsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
