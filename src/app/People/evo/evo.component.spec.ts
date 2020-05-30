import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoComponent } from './evo.component';

describe('EvoComponent', () => {
  let component: EvoComponent;
  let fixture: ComponentFixture<EvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
