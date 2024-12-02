import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPartComponent } from './banner-part.component';

describe('BannerPartComponent', () => {
  let component: BannerPartComponent;
  let fixture: ComponentFixture<BannerPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
