import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StephenComponent } from './stephen.component';

describe('StephenComponent', () => {
  let component: StephenComponent;
  let fixture: ComponentFixture<StephenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StephenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StephenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
