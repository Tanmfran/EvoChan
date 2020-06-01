import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantlayoutComponent } from './valorantlayout.component';

describe('ValorantlayoutComponent', () => {
  let component: ValorantlayoutComponent;
  let fixture: ComponentFixture<ValorantlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorantlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorantlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
