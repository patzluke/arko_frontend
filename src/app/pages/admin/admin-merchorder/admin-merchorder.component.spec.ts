import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchorderComponent } from './admin-merchorder.component';

describe('AdminMerchorderComponent', () => {
  let component: AdminMerchorderComponent;
  let fixture: ComponentFixture<AdminMerchorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMerchorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
