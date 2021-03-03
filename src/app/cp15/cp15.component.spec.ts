import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp15Component } from './cp15.component';

describe('Cp15Component', () => {
  let component: Cp15Component;
  let fixture: ComponentFixture<Cp15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
