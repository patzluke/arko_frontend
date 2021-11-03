import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountsAddComponent } from './admin-accounts-add.component';

describe('AdminAccountsAddComponent', () => {
  let component: AdminAccountsAddComponent;
  let fixture: ComponentFixture<AdminAccountsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
