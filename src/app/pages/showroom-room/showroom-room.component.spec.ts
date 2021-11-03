import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomRoomComponent } from './showroom-room.component';

describe('ShowroomRoomComponent', () => {
  let component: ShowroomRoomComponent;
  let fixture: ComponentFixture<ShowroomRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroomRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
