import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponentComponent } from './FloorApp.component';

describe('MyNewComponentComponent', () => {
  let component: MyNewComponentComponent;
  let fixture: ComponentFixture<MyNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
