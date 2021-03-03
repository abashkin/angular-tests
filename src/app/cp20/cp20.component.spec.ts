import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp20Component } from './cp20.component';

describe('Cp20Component', () => {
  let component: Cp20Component;
  let fixture: ComponentFixture<Cp20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
