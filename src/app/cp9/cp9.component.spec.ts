import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp9Component } from './cp9.component';

describe('Cp9Component', () => {
  let component: Cp9Component;
  let fixture: ComponentFixture<Cp9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
