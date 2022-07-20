import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesBaseComponent } from './themes-base.component';

describe('ThemesBaseComponent', () => {
  let component: ThemesBaseComponent;
  let fixture: ComponentFixture<ThemesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
