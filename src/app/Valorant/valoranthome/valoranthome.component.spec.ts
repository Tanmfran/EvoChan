import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoranthomeComponent } from './valoranthome.component';

describe('ValoranthomeComponent', () => {
  let component: ValoranthomeComponent;
  let fixture: ComponentFixture<ValoranthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoranthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoranthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
