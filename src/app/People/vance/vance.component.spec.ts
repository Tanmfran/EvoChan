import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanceComponent } from './vance.component';

describe('VanceComponent', () => {
  let component: VanceComponent;
  let fixture: ComponentFixture<VanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
