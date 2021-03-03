import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp11Component } from './cp11.component';

describe('Cp11Component', () => {
  let component: Cp11Component;
  let fixture: ComponentFixture<Cp11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
