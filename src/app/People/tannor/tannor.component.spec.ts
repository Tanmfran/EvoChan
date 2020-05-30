import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TannorComponent } from './tannor.component';

describe('TannorComponent', () => {
  let component: TannorComponent;
  let fixture: ComponentFixture<TannorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TannorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TannorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
