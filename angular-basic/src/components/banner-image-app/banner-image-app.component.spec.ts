import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImageAppComponent } from './banner-image-app.component';

describe('BannerImageAppComponent', () => {
  let component: BannerImageAppComponent;
  let fixture: ComponentFixture<BannerImageAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerImageAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerImageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
