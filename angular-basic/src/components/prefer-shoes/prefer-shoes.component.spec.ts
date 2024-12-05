import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferShoesComponent } from './prefer-shoes.component';

describe('PreferShoesComponent', () => {
  let component: PreferShoesComponent;
  let fixture: ComponentFixture<PreferShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferShoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreferShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
