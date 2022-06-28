import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolistComponentComponent } from './videolist-component.component';

describe('VideolistComponentComponent', () => {
  let component: VideolistComponentComponent;
  let fixture: ComponentFixture<VideolistComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideolistComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideolistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
