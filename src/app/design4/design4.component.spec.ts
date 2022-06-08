import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design4Component } from './design4.component';

describe('Design4Component', () => {
  let component: Design4Component;
  let fixture: ComponentFixture<Design4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
