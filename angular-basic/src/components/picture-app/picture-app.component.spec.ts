import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureAppComponent } from './picture-app.component';

describe('PictureAppComponent', () => {
  let component: PictureAppComponent;
  let fixture: ComponentFixture<PictureAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictureAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
