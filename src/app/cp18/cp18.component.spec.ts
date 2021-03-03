import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp18Component } from './cp18.component';

describe('Cp18Component', () => {
  let component: Cp18Component;
  let fixture: ComponentFixture<Cp18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
