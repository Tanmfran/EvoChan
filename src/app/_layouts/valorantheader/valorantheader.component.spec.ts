import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantheaderComponent } from './valorantheader.component';

describe('ValorantheaderComponent', () => {
  let component: ValorantheaderComponent;
  let fixture: ComponentFixture<ValorantheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorantheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorantheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
