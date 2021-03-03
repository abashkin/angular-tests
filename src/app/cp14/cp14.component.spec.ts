import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp14Component } from './cp14.component';

describe('Cp14Component', () => {
  let component: Cp14Component;
  let fixture: ComponentFixture<Cp14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
