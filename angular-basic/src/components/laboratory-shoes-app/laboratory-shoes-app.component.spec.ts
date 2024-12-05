import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryShoesAppComponent } from './laboratory-shoes-app.component';

describe('LaboratoryShoesAppComponent', () => {
  let component: LaboratoryShoesAppComponent;
  let fixture: ComponentFixture<LaboratoryShoesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryShoesAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaboratoryShoesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
