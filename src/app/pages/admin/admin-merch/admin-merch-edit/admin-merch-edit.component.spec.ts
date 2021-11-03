import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchEditComponent } from './admin-merch-edit.component';

describe('AdminMerchEditComponent', () => {
  let component: AdminMerchEditComponent;
  let fixture: ComponentFixture<AdminMerchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMerchEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
