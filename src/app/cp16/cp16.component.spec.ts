import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp16Component } from './cp16.component';

describe('Cp16Component', () => {
  let component: Cp16Component;
  let fixture: ComponentFixture<Cp16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
