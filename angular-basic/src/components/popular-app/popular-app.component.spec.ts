import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAppComponent } from './popular-app.component';

describe('PopularAppComponent', () => {
  let component: PopularAppComponent;
  let fixture: ComponentFixture<PopularAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
