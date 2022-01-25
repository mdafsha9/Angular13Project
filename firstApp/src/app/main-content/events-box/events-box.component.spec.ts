import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBoxComponent } from './events-box.component';

describe('EventsBoxComponent', () => {
  let component: EventsBoxComponent;
  let fixture: ComponentFixture<EventsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
