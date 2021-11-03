import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountsEditComponent } from './admin-accounts-edit.component';

describe('AdminAccountsEditComponent', () => {
  let component: AdminAccountsEditComponent;
  let fixture: ComponentFixture<AdminAccountsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
