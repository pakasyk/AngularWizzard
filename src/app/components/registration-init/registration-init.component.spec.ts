import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInitComponent } from './registration-init.component';

describe('RegistrationInitComponent', () => {
  let component: RegistrationInitComponent;
  let fixture: ComponentFixture<RegistrationInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
