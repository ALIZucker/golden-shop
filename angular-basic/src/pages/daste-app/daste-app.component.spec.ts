import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasteAppComponent } from './daste-app.component';

describe('DasteAppComponent', () => {
  let component: DasteAppComponent;
  let fixture: ComponentFixture<DasteAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasteAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
