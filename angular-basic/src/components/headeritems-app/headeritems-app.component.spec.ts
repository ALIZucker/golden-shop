import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderitemsAppComponent } from './headeritems-app.component';

describe('HeaderitemsAppComponent', () => {
  let component: HeaderitemsAppComponent;
  let fixture: ComponentFixture<HeaderitemsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderitemsAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderitemsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
