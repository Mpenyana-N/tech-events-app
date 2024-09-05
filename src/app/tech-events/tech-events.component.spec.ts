import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechEventsComponent } from './tech-events.component';

describe('TechEventsComponent', () => {
  let component: TechEventsComponent;
  let fixture: ComponentFixture<TechEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
