import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp19Component } from './cp19.component';

describe('Cp19Component', () => {
  let component: Cp19Component;
  let fixture: ComponentFixture<Cp19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
