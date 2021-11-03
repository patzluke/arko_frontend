import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamsAddComponent } from './admin-teams-add.component';

describe('AdminTeamsAddComponent', () => {
  let component: AdminTeamsAddComponent;
  let fixture: ComponentFixture<AdminTeamsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTeamsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeamsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
