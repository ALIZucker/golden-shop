import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProSellerAppComponent } from './pro-seller-app.component';

describe('ProSellerAppComponent', () => {
  let component: ProSellerAppComponent;
  let fixture: ComponentFixture<ProSellerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProSellerAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProSellerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
