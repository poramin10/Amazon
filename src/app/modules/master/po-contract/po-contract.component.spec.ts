import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoContractComponent } from './po-contract.component';

describe('PoContractComponent', () => {
  let component: PoContractComponent;
  let fixture: ComponentFixture<PoContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
