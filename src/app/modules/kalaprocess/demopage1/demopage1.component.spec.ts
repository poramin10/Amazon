import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demopage1Component } from './demopage1.component';

describe('Demopage1Component', () => {
  let component: Demopage1Component;
  let fixture: ComponentFixture<Demopage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demopage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demopage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
