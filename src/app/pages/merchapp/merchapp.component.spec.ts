import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchappComponent } from './merchapp.component';

describe('MerchappComponent', () => {
  let component: MerchappComponent;
  let fixture: ComponentFixture<MerchappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
