import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp17Component } from './cp17.component';

describe('Cp17Component', () => {
  let component: Cp17Component;
  let fixture: ComponentFixture<Cp17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
