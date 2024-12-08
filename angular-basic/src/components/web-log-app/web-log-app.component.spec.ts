import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLogAppComponent } from './web-log-app.component';

describe('WebLogAppComponent', () => {
  let component: WebLogAppComponent;
  let fixture: ComponentFixture<WebLogAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebLogAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebLogAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
