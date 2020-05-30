import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JakeComponent } from './jake.component';

describe('JakeComponent', () => {
  let component: JakeComponent;
  let fixture: ComponentFixture<JakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
