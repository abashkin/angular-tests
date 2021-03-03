import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp10Component } from './cp10.component';

describe('Cp10Component', () => {
  let component: Cp10Component;
  let fixture: ComponentFixture<Cp10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
