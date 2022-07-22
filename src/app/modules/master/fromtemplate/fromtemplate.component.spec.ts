import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromtemplateComponent } from './fromtemplate.component';

describe('FromtemplateComponent', () => {
  let component: FromtemplateComponent;
  let fixture: ComponentFixture<FromtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromtemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
