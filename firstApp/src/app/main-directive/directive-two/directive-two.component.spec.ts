import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTwoComponent } from './directive-two.component';

describe('DirectiveTwoComponent', () => {
  let component: DirectiveTwoComponent;
  let fixture: ComponentFixture<DirectiveTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
