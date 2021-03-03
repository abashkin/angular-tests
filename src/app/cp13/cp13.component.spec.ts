import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp13Component } from './cp13.component';

describe('Cp13Component', () => {
  let component: Cp13Component;
  let fixture: ComponentFixture<Cp13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
