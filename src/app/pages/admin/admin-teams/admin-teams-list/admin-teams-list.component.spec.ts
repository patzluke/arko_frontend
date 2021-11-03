import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamsListComponent } from './admin-teams-list.component';

describe('AdminTeamsListComponent', () => {
  let component: AdminTeamsListComponent;
  let fixture: ComponentFixture<AdminTeamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTeamsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
