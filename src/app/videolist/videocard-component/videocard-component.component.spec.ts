import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardComponentComponent } from './videocard-component.component';

describe('VideocardComponentComponent', () => {
  let component: VideocardComponentComponent;
  let fixture: ComponentFixture<VideocardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideocardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
