import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmieComponent } from './amie.component';

describe('AmieComponent', () => {
  let component: AmieComponent;
  let fixture: ComponentFixture<AmieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
