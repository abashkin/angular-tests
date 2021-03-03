import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp12Component } from './cp12.component';

describe('Cp12Component', () => {
  let component: Cp12Component;
  let fixture: ComponentFixture<Cp12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
