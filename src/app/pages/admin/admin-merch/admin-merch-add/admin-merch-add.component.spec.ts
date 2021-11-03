import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchAddComponent } from './admin-merch-add.component';

describe('AdminMerchAddComponent', () => {
  let component: AdminMerchAddComponent;
  let fixture: ComponentFixture<AdminMerchAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMerchAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
